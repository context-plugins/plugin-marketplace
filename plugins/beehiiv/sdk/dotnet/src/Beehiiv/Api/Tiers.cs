using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Beehiiv.Core;
using Beehiiv.Core.Authentication;
using Beehiiv.Core.Exceptions;
using Beehiiv.Core.Models;
using Beehiiv.Core.Request;
using Beehiiv.Core.Response;
using Beehiiv.Errors;
using Beehiiv.Models;
using Beehiiv.Requests.Tiers;

namespace Beehiiv.Api;

public sealed class Tiers
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Tiers(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create a tier OAuth Scope: tiers:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TierResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Create12Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new tier for a publication.
    /// </remarks>
    public Task<TierResponse> Create12(Create12Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/tiers"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TierResponse>(),
            Create12Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List tiers OAuth Scope: tiers:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IndexTiersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Index21Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all tiers belonging to a specific publication
    /// </remarks>
    public Task<IndexTiersResponse> Index21(Index21Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/tiers"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [
                new Param("expand[]", request.Expand),
                new Param("limit", request.Limit),
                new Param("page", request.Page),
                new Param("direction", request.Direction),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IndexTiersResponse>(),
            Index21Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a tier OAuth Scope: tiers:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TierResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Patch4Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an existing tier belonging to a specific publication
    /// </remarks>
    public Task<TierResponse> Patch4(Patch4Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/tiers/{tierId}"),
            [new TemplateParam("publicationId", request.PublicationId), new TemplateParam("tierId", request.TierId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TierResponse>(),
            Patch4Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a tier OAuth Scope: tiers:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TierResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Put4Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an existing tier belonging to a specific publication
    /// </remarks>
    public Task<TierResponse> Put4(Put4Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/tiers/{tierId}"),
            [new TemplateParam("publicationId", request.PublicationId), new TemplateParam("tierId", request.TierId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TierResponse>(),
            Put4Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get tier OAuth Scope: tiers:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TierResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Show16Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a single tier belonging to a specific publication
    /// </remarks>
    public Task<TierResponse> Show16(Show16Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/tiers/{tierId}"),
            [new TemplateParam("publicationId", request.PublicationId), new TemplateParam("tierId", request.TierId)],
            [new Param("expand[]", request.Expand)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TierResponse>(),
            Show16Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
