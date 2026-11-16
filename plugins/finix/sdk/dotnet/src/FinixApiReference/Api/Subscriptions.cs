using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FinixApiReference.Core;
using FinixApiReference.Core.Exceptions;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Request;
using FinixApiReference.Core.Response;
using FinixApiReference.Errors;
using FinixApiReference.Models;
using FinixApiReference.Requests.Subscriptions;

namespace FinixApiReference.Api;

/// <summary>
/// A <c>Subscription</c> resource represents a recurring charge to a <c>Payment Instrument</c> at regular intervals. Subscribers can be buyers, customers, or merchants.
/// <para>
/// Subscriptions are supported for USA and Canadian merchants.
/// </para>
/// <para>
/// When creating a <c>Subscription</c>, you have the option to use a <c>Subscription Plan</c>.
/// </para>
/// <para>
/// <b>Limitations</b>:
/// - *Supported countries*: Subscriptions are available in the United States and Canada.&lt;br&gt;
/// - *Supported payment methods*: Subscriptions currently support recurring card payments and recurring bank account payments (&lt;a href="/guides/online-payments/bank-payments/ach-direct-debits"&gt;ACH&lt;/a&gt; in the USA).&lt;br&gt;
/// - *Approved merchants*: At this time, only approved merchants with one of the following processors can create subscriptions: <c>DUMMY_V1</c> and <c>FINIX_V1</c>.&lt;br&gt;&lt;br&gt;
/// </para>
/// <para>
/// <b>Related Guides:</b>
/// - <see href="/guides/subscriptions">Creating Subscriptions</see>
/// - <see href="/guides/subscriptions/subscription-plans">Creating Subscription Plans</see>
/// - <see href="/guides/subscriptions/recurring-payment-guidelines">Recurring Payments Guidelines</see>
/// </para>
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
    /// Create a Subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Subscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSubscriptionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a <c>Subscription</c> to charge a <see href="/api/payment-instruments">Payment Instrument</see> on a recurring schedule. Without a trial period, the first <see href="/api/transfers">Transfer</see> is created within 60 minutes of the <c>Subscription</c> being created.
    /// <para>
    /// <b>Optional features:</b>
    /// - <b>Trial period</b> - include <c>trial_details</c> to delay the first charge; <c>first_charge_at</c> in the response shows when billing begins. If the <c>Subscription</c> is based on a <see href="/api/subscription-plans">Subscription Plan</see>, <c>trial_details</c> do not override those from the plan.
    /// - <b>Discount phase</b> - include <c>discount_phase_details</c> with a reduced <c>amount</c> and a <c>billing_interval_count</c> to apply a discounted price for a set number of cycles before full billing resumes. If the <c>Subscription</c> is based on a <see href="/api/subscription-plans">Subscription Plan</see>, <c>discount_phase_details</c> do not override the plan's values.
    /// - <b>Subscription Plan</b> - provide a <c>subscription_plan_id</c> to base the <c>Subscription</c> on a <see href="/api/subscription-plans">Subscription Plan</see> template (inherits <c>amount</c>, <c>billing_interval</c>, and more). You cannot set the <c>amount</c> field when you use a <c>Subscription Plan</c>.
    /// - <b>Future start</b> - set <c>start_subscription_at</c> to a future timestamp; the <c>Subscription</c> starts in state <c>NOT_STARTED</c> with <c>subscription_phase: NONE</c>.
    /// - <b>Billing cycle day</b> - set <c>billing_cycle_day</c> to control which day of the month billing occurs for monthly-cycle subscriptions (e.g., <c>MONTHLY</c>, <c>BIMONTHLY</c>, <c>QUARTERLY</c>, <c>SEMIYEARLY</c>, <c>YEARLY</c>, <c>BIYEARLY</c>, <c>TRIYEARLY</c>). If the start date doesn't match the billing cycle day, the first invoice is prorated.
    /// - <b>Fixed length</b> - set <c>total_billing_intervals</c> to expire the <c>Subscription</c> after a fixed number of billing cycles.
    /// </para>
    /// <para>
    /// {% admonition type="info" %}
    /// When the <see href="/api/payment-instruments">Payment Instrument</see> › <c>type</c> is <c>PAYMENT_CARD</c>, <c>APPLE_PAY</c>, or <c>GOOGLE_PAY</c>, Finix runs a $0.01 <c>Authorization</c> to validate the card (AVS and CVV). If validation fails, the API returns <c>422</c> and the <c>Subscription</c> is not created.
    /// {% /admonition %}
    /// </para>
    /// </remarks>
    public Task<Subscription> CreateSubscription(CreateSubscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/subscriptions"),
            [],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Subscription>(),
            CreateSubscriptionError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a Subscription Balance Entry
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionBalanceEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSubscriptionBalanceEntryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a <c>Subscription Balance Entry</c>. A <c>Subscription Balance Entry</c> represents a credit applied to a <c>Subscription</c>.
    /// </remarks>
    public Task<SubscriptionBalanceEntry> CreateSubscriptionBalanceEntry(CreateSubscriptionBalanceEntryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/subscriptions/{subscription_id}/subscription_balance_entries"),
            [new TemplateParam("subscription_id", request.SubscriptionId)],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SubscriptionBalanceEntry>(),
            CreateSubscriptionBalanceEntryError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a Subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Subscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSubscriptionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of a previously created <c>Subscription</c>.
    /// </remarks>
    public Task<Subscription> GetSubscription(GetSubscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/subscriptions/{subscription_id}"),
            [new TemplateParam("subscription_id", request.SubscriptionId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Subscription>(),
            GetSubscriptionError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Subscription Balance Entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListSubscriptionBalanceEntries"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSubscriptionBalanceEntriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Subscription Balance Entry</c> resources to view a timeline of all changes to a <c>Subscription</c> balance by a user. Currently, only credits can modify a <c>Subscription</c> balance.
    /// <para>
    /// For details on how to query endpoints using the available parameters, see <see href="/api/overview/#section/Query-Parameters">Query Parameters</see>.
    /// </para>
    /// </remarks>
    public Task<ListSubscriptionBalanceEntries> ListSubscriptionBalanceEntries(ListSubscriptionBalanceEntriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/subscriptions/{subscription_id}/subscription_balance_entries"),
            [new TemplateParam("subscription_id", request.SubscriptionId)],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("amount", request.Amount),
                new Param("amount.gt", request.AmountGt),
                new Param("amount.gte", request.AmountGte),
                new Param("amount.lt", request.AmountLt),
                new Param("amount.lte", request.AmountLte),
                new Param("before_cursor", request.BeforeCursor),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("limit", request.Limit),
                new Param("sort", request.Sort),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListSubscriptionBalanceEntries>(),
            ListSubscriptionBalanceEntriesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Subscriptions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListSubscriptions"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSubscriptionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Subscription</c> resources.
    /// <para>
    /// For details on how to query endpoints using the available parameters, see <see href="/api/section/query-parameters">Query Parameters</see>.
    /// </para>
    /// </remarks>
    public Task<ListSubscriptions> ListSubscriptions(ListSubscriptionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/subscriptions"),
            [],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("amount.gt", request.AmountGt),
                new Param("amount.gte", request.AmountGte),
                new Param("amount.lt", request.AmountLt),
                new Param("amount.lte", request.AmountLte),
                new Param("amount", request.Amount),
                new Param("application_id", request.ApplicationId),
                new Param("before_cursor", request.BeforeCursor),
                new Param("billing_interval", request.BillingInterval),
                new Param("buyer_identity_id", request.BuyerIdentityId),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("id", request.Id),
                new Param("limit", request.Limit),
                new Param("linked_to", request.LinkedTo),
                new Param("nickname", request.Nickname),
                new Param("nickname.like", request.NicknameLike),
                new Param("state", request.State),
                new Param("subscription_link_id", request.SubscriptionLinkId),
                new Param("subscription_plan_id", request.SubscriptionPlanId),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListSubscriptions>(),
            ListSubscriptionsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cancel a Subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveSubscriptionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancel a <c>Subscription</c>.
    /// </remarks>
    public Task RemoveSubscription(RemoveSubscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/subscriptions/{subscription_id}"),
            [new TemplateParam("subscription_id", request.SubscriptionId)],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RemoveSubscriptionError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Subscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSubscriptionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an existing <c>Subscription</c> resource, typically used for subscriptions created without a <c>Subscription Plan</c>. Note that you can only update specific resource fields.
    /// <para>
    /// Common use cases for updating a <c>Subscription</c> include:
    /// </para>
    /// <para>
    /// ### Updating the payment amount
    /// </para>
    /// <para>
    /// This operation allows for adjusting the payment amount, such as when a subscriber decides to donate more or less money to a charity or upgrade/downgrade a product or service.
    /// </para>
    /// <para>
    /// ### Updating billing details
    /// </para>
    /// <para>
    /// If the subscriber wishes to change their payment details, you can update the [<c>buyer_details.instrument_id</c>] property with a new <see href="#Payment-Instruments"><c>Payment Instrument</c></see>.
    /// </para>
    /// <para>
    /// ### Updating the billing cycle day
    /// </para>
    /// <para>
    /// Set <c>billing_cycle_day</c> to change the day of the month the <c>Subscription</c> bills. Invoices that have already been issued do not change, and the current billing period completes at the full amount. On the next billing date, the buyer is charged a prorated amount that bridges the gap to the new billing cycle day, then full billing resumes. To learn more, see <see href="/guides/subscriptions/subscriptions-quickstart#billing-cycle-day">Billing cycle day</see>.
    /// </para>
    /// </remarks>
    public Task<Subscription> UpdateSubscription(UpdateSubscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/subscriptions/{subscription_id}"),
            [new TemplateParam("subscription_id", request.SubscriptionId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Subscription>(),
            UpdateSubscriptionError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Subscription Balance Entry
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionBalanceEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSubscriptionBalanceEntryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the tags for an existing <c>Subscription Balance Entry</c>.
    /// </remarks>
    public Task<SubscriptionBalanceEntry> UpdateSubscriptionBalanceEntry(UpdateSubscriptionBalanceEntryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/subscriptions/{subscription_id}/subscription_balance_entries/{subscription_balance_entry_id}"),
            [
                new TemplateParam("subscription_id", request.SubscriptionId),
                new TemplateParam("subscription_balance_entry_id", request.SubscriptionBalanceEntryId),
            ],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SubscriptionBalanceEntry>(),
            UpdateSubscriptionBalanceEntryError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
