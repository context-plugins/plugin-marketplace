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
using Beehiiv.Requests.NewsletterListSubscriptions;

namespace Beehiiv.Api;

public sealed class NewsletterListSubscriptions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal NewsletterListSubscriptions(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create newsletter list subscription OAuth Scope: newsletter_lists:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NewsletterListSubscriptionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Create6Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Subscribe a subscription to a newsletter list. Accepts either a subscription_id or email to identify the subscription.
    /// <para>
    /// This endpoint only enrolls <b>existing</b> subscriptions. To create a new subscription <b>and</b> enroll it in one or more newsletter lists in a single call, use the Create subscription endpoint and pass the <c>newsletter_list_ids</c> parameter.
    /// </para>
    /// </remarks>
    public Task<NewsletterListSubscriptionResponse> Create6(Create6Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("newsletterListId", request.NewsletterListId),
            ],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<NewsletterListSubscriptionResponse>(),
            Create6Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List newsletter list subscriptions OAuth Scope: newsletter_lists:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NewsletterListSubscriptionIndexResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Index13Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all subscriptions for a newsletter list.
    /// </remarks>
    public Task<NewsletterListSubscriptionIndexResponse> Index13(Index13Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("newsletterListId", request.NewsletterListId),
            ],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("page", request.Page),
                new Param("direction", request.Direction),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<NewsletterListSubscriptionIndexResponse>(),
            Index13Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get newsletter list subscription OAuth Scope: newsletter_lists:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NewsletterListSubscriptionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Show9Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a single newsletter list subscription.
    /// </remarks>
    public Task<NewsletterListSubscriptionResponse> Show9(Show9Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions/{newsletterListSubscriptionId}"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("newsletterListId", request.NewsletterListId),
                new TemplateParam("newsletterListSubscriptionId", request.NewsletterListSubscriptionId),
            ],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<NewsletterListSubscriptionResponse>(),
            Show9Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update newsletter list subscription OAuth Scope: newsletter_lists:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NewsletterListSubscriptionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a newsletter list subscription. Currently supports unsubscribing a subscription from a newsletter list.
    /// </remarks>
    public Task<NewsletterListSubscriptionResponse> Update(UpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions/{newsletterListSubscriptionId}"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("newsletterListId", request.NewsletterListId),
                new TemplateParam("newsletterListSubscriptionId", request.NewsletterListSubscriptionId),
            ],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<NewsletterListSubscriptionResponse>(),
            UpdateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update newsletter list subscription by subscription ID OAuth Scope…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NewsletterListSubscriptionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateBySubscriptionIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a newsletter list subscription by subscription ID. An alternative to the update endpoint when you don't have the newsletter list subscription ID. Accepts either a subscription_id or email to identify the subscription. Currently supports unsubscribing a subscription from a newsletter list.
    /// </remarks>
    public Task<NewsletterListSubscriptionResponse> UpdateBySubscriptionId(UpdateBySubscriptionIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions/by_subscription_id/{subscriptionId}"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("newsletterListId", request.NewsletterListId),
                new TemplateParam("subscriptionId", request.SubscriptionId),
            ],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<NewsletterListSubscriptionResponse>(),
            UpdateBySubscriptionIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
