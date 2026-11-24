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
using Beehiiv.Requests.Subscriptions;

namespace Beehiiv.Api;

public sealed class Subscriptions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Subscriptions(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create subscription OAuth Scope: subscriptions:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Create11Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create new subscriptions for a publication.
    /// </remarks>
    public Task<SubscriptionResponse> Create11(Create11Request request,
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
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SubscriptionResponse>(),
            Create11Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete subscription OAuth Scope: subscriptions:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionDeleteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Delete5Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This cannot be undone. All data associated with the subscription will also be deleted. We recommend unsubscribing when possible instead of deleting. If a premium subscription is deleted they will no longer be billed. Deletes a subscription.
    /// </remarks>
    public Task<SubscriptionDeleteResponse> Delete5(Delete5Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/subscriptions/{subscriptionId}"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("subscriptionId", request.SubscriptionId),
            ],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<SubscriptionDeleteResponse>(),
            Delete5Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get subscription by email OAuth Scope: subscriptions:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetByEmailError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Please note that this endpoint requires the email to be URL encoded. Please reference your language's documentation for the correct method of encoding. Retrieve a single subscription belonging to a specific email address in a specific publication.
    /// </remarks>
    public Task<SubscriptionResponse> GetByEmail(GetByEmailRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/subscriptions/by_email/{email}"),
            [new TemplateParam("publicationId", request.PublicationId), new TemplateParam("email", request.Email)],
            [new Param("expand[]", request.Expand)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SubscriptionResponse>(),
            GetByEmailError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get subscription by ID OAuth Scope: subscriptions:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// In previous versions of the API, another endpoint existed to retrieve a subscription by the subscriber ID. This endpoint is now deprecated and will be removed in a future version of the API. Please use this endpoint instead. The subscription ID can be found by exporting a list of subscriptions either via the <c>Settings &gt; Publications &gt; Export Data</c> or by exporting a CSV in a segment. Retrieve a single subscription belonging to a specific publication.
    /// </remarks>
    public Task<SubscriptionResponse> GetById(GetByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/subscriptions/{subscriptionId}"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("subscriptionId", request.SubscriptionId),
            ],
            [new Param("expand[]", request.Expand)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SubscriptionResponse>(),
            GetByIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List subscriptions OAuth Scope: subscriptions:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionsListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Index20Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all subscriptions belonging to a specific publication.
    /// <para>
    /// <b>New</b>: This endpoint now supports cursor-based pagination for better performance and consistency. Use the <c>cursor</c> parameter instead of <c>page</c> for new integrations.
    /// <b>Deprecation Notice</b>: Offset-based pagination (using <c>page</c> parameter) is deprecated and limited to 100 pages maximum. Please migrate to cursor-based pagination. See our Pagination Guide for details.
    /// </para>
    /// </remarks>
    public Task<SubscriptionsListResponse> Index20(Index20Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/subscriptions"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [
                new Param("expand[]", request.Expand),
                new Param("status", request.Status),
                new Param("tier", request.Tier),
                new Param("premium_tiers[]", request.PremiumTiers),
                new Param("premium_tier_ids[]", request.PremiumTierIds),
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("page", request.Page),
                new Param("email", request.Email),
                new Param("order_by", request.OrderBy),
                new Param("direction", request.Direction),
                new Param("creation_date", request.CreationDate),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SubscriptionsListResponse>(),
            Index20Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update subscription by ID OAuth Scope: subscriptions:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Patch3Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a single subscription.
    /// </remarks>
    public Task<SubscriptionResponse> Patch3(Patch3Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/subscriptions/{subscriptionId}"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("subscriptionId", request.SubscriptionId),
            ],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SubscriptionResponse>(),
            Patch3Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update subscription by ID OAuth Scope: subscriptions:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Put3Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a single subscription.
    /// </remarks>
    public Task<SubscriptionResponse> Put3(Put3Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/subscriptions/{subscriptionId}"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("subscriptionId", request.SubscriptionId),
            ],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SubscriptionResponse>(),
            Put3Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update subscription by email OAuth Scope: subscriptions:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateByEmailError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a single subscription by email.
    /// </remarks>
    public Task<SubscriptionResponse> UpdateByEmail(UpdateByEmailRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/subscriptions/by_email/{email}"),
            [new TemplateParam("publicationId", request.PublicationId), new TemplateParam("email", request.Email)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SubscriptionResponse>(),
            UpdateByEmailError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
