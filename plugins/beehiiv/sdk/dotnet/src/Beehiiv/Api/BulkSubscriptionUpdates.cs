using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Beehiiv.Core;
using Beehiiv.Core.Authentication;
using Beehiiv.Core.ErrorResponse;
using Beehiiv.Core.Exceptions;
using Beehiiv.Core.Models;
using Beehiiv.Core.Request;
using Beehiiv.Core.Response;
using Beehiiv.Errors;
using Beehiiv.Models;
using Beehiiv.Requests.BulkSubscriptionUpdates;

namespace Beehiiv.Api;

public sealed class BulkSubscriptionUpdates
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal BulkSubscriptionUpdates(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// List subscription updates OAuth Scope: subscriptions:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkSubscriptionUpdatesListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Index7Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of Subscription Update objects for a publication.
    /// </remarks>
    public Task<BulkSubscriptionUpdatesListResponse> Index7(Index7Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/bulk_subscription_updates"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BulkSubscriptionUpdatesListResponse>(),
            Index7Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update subscriptions OAuth Scope: subscriptions:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionsPatchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Bulk update multiple subscriptions fields, including status, custom fields, and tiers.
    /// </remarks>
    public Task<SubscriptionsPatchResponse> Patch(PatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/subscriptions/bulk_actions"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SubscriptionsPatchResponse>(),
            PatchError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update subscriptions' status OAuth Scope: subscriptions:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Bulk update subscriptions' status.
    /// </remarks>
    public Task PatchStatus(PatchStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/subscriptions"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update subscriptions OAuth Scope: subscriptions:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionsPatchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Bulk update multiple subscriptions fields, including status, custom fields, and tiers.
    /// </remarks>
    public Task<SubscriptionsPatchResponse> Put(PutRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/subscriptions/bulk_actions"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SubscriptionsPatchResponse>(),
            PutError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update subscriptions' status OAuth Scope: subscriptions:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Bulk update subscriptions' status.
    /// </remarks>
    public Task PutStatus(PutStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/subscriptions"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get subscription update OAuth Scope: subscriptions:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkSubscriptionUpdatesGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Show4Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a single Subscription Update object for a publication.
    /// </remarks>
    public Task<BulkSubscriptionUpdatesGetResponse> Show4(Show4Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/bulk_subscription_updates/{id}"),
            [new TemplateParam("publicationId", request.PublicationId), new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BulkSubscriptionUpdatesGetResponse>(),
            Show4Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
