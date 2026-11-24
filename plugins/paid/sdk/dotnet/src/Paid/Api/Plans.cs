using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Paid.Core;
using Paid.Core.Authentication;
using Paid.Core.Exceptions;
using Paid.Core.Extensions;
using Paid.Core.Models;
using Paid.Core.Request;
using Paid.Core.Response;
using Paid.Errors;
using Paid.Models;
using Paid.Requests.Plans;

namespace Paid.Api;

public sealed class Plans
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Plans(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create a new plan
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Plan1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePlanError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new plan for a product.
    /// </remarks>
    public Task<Plan1> CreatePlan(CreatePlanOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/plans/"),
            [],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Plan1>(),
            CreatePlanError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get plan by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Plan"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetByIdError"/> when the server returns an error response.</exception>
    public Task<Plan> GetById(GetByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/plans/{planId}"),
            [new TemplateParam("planId", request.PlanId)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Plan>(),
            GetByIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get customer's current plan
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PlansGetCurrentResponse200"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCurrentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the currently active plan subscription for a customer by their external ID. Returns the plan details and subscription information.
    /// </remarks>
    public Task<PlansGetCurrentResponse200> GetCurrent(GetCurrentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/plans/current"),
            [],
            [new Param("customerExternalId", request.CustomerExternalId)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PlansGetCurrentResponse200>(),
            GetCurrentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get plan group by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PlanGroup"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupByIdError"/> when the server returns an error response.</exception>
    public Task<PlanGroup> GetGroupById(GetGroupByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/plans/planGroup/{planGroupId}"),
            [new TemplateParam("planGroupId", request.PlanGroupId)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PlanGroup>(),
            GetGroupByIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get plans for a plan group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="PlanWithFeatures"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupPlansError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all plans in a plan group with their features (product-attribute pairs)
    /// </remarks>
    public Task<IReadOnlyList<PlanWithFeatures>> GetGroupPlans(GetGroupPlansRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/plans/planGroup/{planGroupId}/plans"),
            [new TemplateParam("planGroupId", request.PlanGroupId)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<PlanWithFeatures>>(),
            GetGroupPlansError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get plan by external ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Plan1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPlanByExternalIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a plan by your external plan ID.
    /// </remarks>
    public Task<Plan1> GetPlanByExternalId(GetPlanByExternalIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/plans/external/{externalId}"),
            [new TemplateParam("externalId", request.ExternalId)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Plan1>(),
            GetPlanByExternalIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get plan
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Plan1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPlanByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a plan by Paid plan ID.
    /// </remarks>
    public Task<Plan1> GetPlanById(GetPlanByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/plans/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Plan1>(),
            GetPlanByIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch usage summaries for a plan and customer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UsageSummariesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUsageError"/> when the server returns an error response.</exception>
    public Task<UsageSummariesResponse> GetUsage(GetUsageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/plans/{planId}/usage"),
            [new TemplateParam("planId", request.PlanId)],
            [
                new Param("externalId", request.ExternalId),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("startTime", request.StartTime?.ToIso8601()),
                new Param("endTime", request.EndTime?.ToIso8601()),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UsageSummariesResponse>(),
            GetUsageError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List plans
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PlanListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPlansError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns plans for your organization, including archived plans by default, optionally filtered to a product.
    /// </remarks>
    public Task<PlanListResponse> ListPlans(ListPlansRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/plans/"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("productId", request.ProductId),
                new Param("externalProductId", request.ExternalProductId),
                new Param("includeArchived", request.IncludeArchived),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PlanListResponse>(),
            ListPlansError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Subscribe customer to plan
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Order"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SubscribeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new order for a customer subscribing to a plan. The order will be created with the plan's products and pricing attributes.
    /// </remarks>
    public Task<Order> Subscribe(SubscribeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/plans/{planId}/subscribe"),
            [new TemplateParam("planId", request.PlanId)],
            [new Param("customerExternalId", request.CustomerExternalId), new Param("currency", request.Currency)],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<Order>(),
            SubscribeError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unsubscribe customer from plan
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CancelRenewalResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UnsubscribeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancels the renewal of an active order for a customer's plan subscription. The order will remain active until the cancellation date.
    /// </remarks>
    public Task<CancelRenewalResponse> Unsubscribe(UnsubscribeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/plans/{planId}/unsubscribe"),
            [new TemplateParam("planId", request.PlanId)],
            [new Param("customerExternalId", request.CustomerExternalId)],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<CancelRenewalResponse>(),
            UnsubscribeError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update plan by external ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Plan1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdatePlanByExternalIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a plan by your external plan ID. If attributes are provided, they replace the plan's existing attributes. Set status to archive or restore the plan.
    /// </remarks>
    public Task<Plan1> UpdatePlanByExternalId(UpdatePlanByExternalIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/plans/external/{externalId}"),
            [new TemplateParam("externalId", request.ExternalId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Plan1>(),
            UpdatePlanByExternalIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update plan
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Plan1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdatePlanByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a plan by Paid plan ID. If attributes are provided, they replace the plan's existing attributes. Set status to archive or restore the plan.
    /// </remarks>
    public Task<Plan1> UpdatePlanById(UpdatePlanByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/plans/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Plan1>(),
            UpdatePlanByIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update plan upgrade path
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PlanUpgradePathResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdatePlanUpgradePathError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates upgrade path ordering for plans within a product, grouped by billing frequency.
    /// </remarks>
    public Task<PlanUpgradePathResponse> UpdatePlanUpgradePath(UpdatePlanUpgradePathOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/plans/upgrade-path"),
            [],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PlanUpgradePathResponse>(),
            UpdatePlanUpgradePathError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upgrade customer to a new plan
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProrationUpgradeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpgradeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upgrades a customer from one plan to another with automatic proration. Credits are applied for the unused portion of the current billing period, and the order is updated with the new plan's pricing.
    /// </remarks>
    public Task<ProrationUpgradeResponse> Upgrade(UpgradeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/plans/upgrade"),
            [],
            [
                new Param("customerExternalId", request.CustomerExternalId),
                new Param("oldPlanId", request.OldPlanId),
                new Param("newPlanId", request.NewPlanId),
            ],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ProrationUpgradeResponse>(),
            UpgradeError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
