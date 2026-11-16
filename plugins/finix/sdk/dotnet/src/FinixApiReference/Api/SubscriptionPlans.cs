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
using FinixApiReference.Requests.SubscriptionPlans;

namespace FinixApiReference.Api;

/// <summary>
/// A <c>Subscription Plan</c> resource is a template with set recurring costs and frequencies that can be reused across multiple <c>Subscription</c> resources.
/// <para>
/// <b>Related Guides:</b>
/// - <see href="/guides/subscriptions/subscription-plans">Creating Subscriptions Plans</see>
/// - <see href="/guides/subscriptions">Creating Subscriptions</see>
/// - <see href="/guides/subscriptions/recurring-payment-guidelines">Recurring Payments Guidelines</see>
/// </para>
/// </summary>
public sealed class SubscriptionPlans
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SubscriptionPlans(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a Subscription Plan
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionPlan"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSubscriptionPlanError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a <c>Subscription Plan</c> resource to group and manage recurring payments for individual <c>Subscription</c> resources. You can create a <c>Subscription Plan</c> with or without a trial period.
    /// </remarks>
    public Task<SubscriptionPlan> CreateSubscriptionPlan(CreateSubscriptionPlanRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/subscription_plans"),
            [],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SubscriptionPlan>(),
            CreateSubscriptionPlanError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a Subscription Plan
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionPlan"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSubscriptionPlanError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of an existing <c>Subscription Plan</c>.
    /// </remarks>
    public Task<SubscriptionPlan> GetSubscriptionPlan(GetSubscriptionPlanRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/subscription_plans/{subscription_plan_id}"),
            [new TemplateParam("subscription_plan_id", request.SubscriptionPlanId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SubscriptionPlan>(),
            GetSubscriptionPlanError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Subscription Plans
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListSubscriptionPlans"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSubscriptionPlansError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Subscription Plan</c> resources.
    /// </remarks>
    public Task<ListSubscriptionPlans> ListSubscriptionPlans(ListSubscriptionPlansRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/subscription_plans"),
            [],
            [
                new Param("amount.gt", request.AmountGt),
                new Param("amount.gte", request.AmountGte),
                new Param("amount.lt", request.AmountLt),
                new Param("amount.lte", request.AmountLte),
                new Param("amount", request.Amount),
                new Param("linked_to", request.LinkedTo),
                new Param("plan_name", request.PlanName),
                new Param("plan_name.like", request.PlanNameLike),
                new Param("state", request.State),
                new Param("application_id", request.ApplicationId),
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("limit", request.Limit),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListSubscriptionPlans>(),
            ListSubscriptionPlansError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Subscription Plan
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionPlan"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSubscriptionPlanError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an existing <c>Subscription Plan</c>.
    /// <para>
    /// Options:
    /// - Set <c>update_existing_subscriptions</c> to <c>true</c> to update existing subscriptions.
    /// - Archive the <c>Subscription Plan</c> by setting its <c>state</c> to <c>INACTIVE</c>.
    /// </para>
    /// </remarks>
    public Task<SubscriptionPlan> UpdateSubscriptionPlan(UpdateSubscriptionPlanRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/subscription_plans/{subscription_plan_id}"),
            [new TemplateParam("subscription_plan_id", request.SubscriptionPlanId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SubscriptionPlan>(),
            UpdateSubscriptionPlanError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
