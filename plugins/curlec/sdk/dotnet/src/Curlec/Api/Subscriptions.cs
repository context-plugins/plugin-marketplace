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
using Curlec.Requests.Subscriptions;

namespace Curlec.Api;

/// <summary>
/// Recurring billing subscriptions. Customers must authorize a payment mandate (UPI Autopay, NACH, or card-on-file) via the short_url before charges begin. Supports pause/resume, plan changes, add-ons, and indefinite billing cycles.
/// </summary>
public sealed class Subscriptions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Subscriptions(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel a subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Subscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelSubscriptionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancel an active or authenticated subscription. Use cancel_at_cycle_end=1 to continue service until the end of the current cycle before cancelling.
    /// </remarks>
    public Task<Subscription> CancelSubscription(CancelSubscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/subscriptions/{id}/cancel"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Subscription>(),
            CancelSubscriptionError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cancel scheduled changes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Subscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelSubscriptionScheduledChangesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancel any pending plan or quantity changes that were scheduled for the next billing cycle.
    /// </remarks>
    public Task<Subscription> CancelSubscriptionScheduledChanges(CancelSubscriptionScheduledChangesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/subscriptions/{id}/cancel_scheduled_changes"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<Subscription>(),
            CancelSubscriptionScheduledChangesError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Subscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSubscriptionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Subscribe a customer to a plan. Returns a short_url that the customer MUST open to authorize the payment mandate (UPI Autopay, NACH, or card-on-file). The subscription will not charge until the mandate is authorized. Set notify_info to send the auth link via SMS/email automatically. Requires Subscriptions feature enabled on your Razorpay account.
    /// </remarks>
    public Task<Subscription> CreateSubscription(CreateSubscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/subscriptions"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Subscription>(),
            CreateSubscriptionError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an offer from a subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSubscriptionOfferError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove an applied offer/coupon from a subscription. The offer will no longer apply from the next billing cycle.
    /// </remarks>
    public Task<object> DeleteSubscriptionOffer(DeleteSubscriptionOfferRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/subscriptions/{sub_id}/{offer_id}"),
            [new TemplateParam("sub_id", request.SubId), new TemplateParam("offer_id", request.OfferId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteSubscriptionOfferError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Subscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchSubscriptionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get current status and full details of a subscription.
    /// </remarks>
    public Task<Subscription> FetchSubscription(FetchSubscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/subscriptions/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Subscription>(),
            FetchSubscriptionError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch scheduled changes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionsRetrieveScheduledChangesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchSubscriptionScheduledChangesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve any pending plan or quantity changes scheduled for the next billing cycle.
    /// </remarks>
    public Task<SubscriptionsRetrieveScheduledChangesResponse> FetchSubscriptionScheduledChanges(FetchSubscriptionScheduledChangesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/subscriptions/{id}/retrieve_scheduled_changes"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SubscriptionsRetrieveScheduledChangesResponse>(),
            FetchSubscriptionScheduledChangesError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all subscriptions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSubscriptionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all subscriptions. Filter by plan_id or status. Returns up to 100 per call.
    /// </remarks>
    public Task<SubscriptionsResponse> ListSubscriptions(ListSubscriptionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/subscriptions"),
            [],
            [
                new Param("plan_id", request.PlanId),
                new Param("from", request.From),
                new Param("to", request.To),
                new Param("count", request.Count),
                new Param("skip", request.Skip),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SubscriptionsResponse>(),
            ListSubscriptionsError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Pause a subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Subscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PauseSubscriptionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Pause an active subscription. No charges will be attempted while paused. Resume with POST /subscriptions/{id}/resume.
    /// </remarks>
    public Task<Subscription> PauseSubscription(PauseSubscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/subscriptions/{id}/pause"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Subscription>(),
            PauseSubscriptionError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Resume a paused subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Subscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResumeSubscriptionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resume a paused subscription. Charging resumes on the next scheduled cycle.
    /// </remarks>
    public Task<Subscription> ResumeSubscription(ResumeSubscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/subscriptions/{id}/resume"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Subscription>(),
            ResumeSubscriptionError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Subscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSubscriptionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update plan, quantity, or schedule future changes for a subscription. Use schedule_change_at='now' for immediate effect (creates a new billing cycle) or 'cycle_end' to defer until the current cycle ends. Cannot change plan mid-cycle without creating a new cycle.
    /// </remarks>
    public Task<Subscription> UpdateSubscription(UpdateSubscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/subscriptions/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Subscription>(),
            UpdateSubscriptionError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
