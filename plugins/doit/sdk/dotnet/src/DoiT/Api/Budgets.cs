using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.Budgets;

namespace DoiT.Api;

/// <summary>
/// Track actual cloud spend against planned spend.
/// </summary>
public sealed class Budgets
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Budgets(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a budget
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BudgetApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBudgetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new budget
    /// </remarks>
    public Task<BudgetApi> CreateBudget(CreateBudgetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/budgets"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BudgetApi>(),
            CreateBudgetError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a budget
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteBudgetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the specified budget.
    /// </remarks>
    public Task<object> DeleteBudget(DeleteBudgetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/budgets/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteBudgetError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a budget
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BudgetApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBudgetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the current utilization and configuration of the specified budget.
    /// </remarks>
    public Task<BudgetApi> GetBudget(GetBudgetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/budgets/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BudgetApi>(),
            GetBudgetError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List budgets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnalyticsV1BudgetsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBudgetsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of budgets that your account has access to. Budgets are listed in reverse chronological order by default.
    /// Each budget includes a server-computed <c>riskStatus</c> (<c>atRisk</c>, <c>onTrack</c>, or <c>unknown</c>), and the response includes a <c>riskAggregations</c> summary of risk counts across the full filtered result set (all pages, not just the current page).
    /// </remarks>
    public Task<AnalyticsV1BudgetsResponse> ListBudgets(ListBudgetsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/budgets"),
            [],
            [
                new Param("maxResults", request.MaxResults),
                new Param("pageToken", request.PageToken),
                new Param("filter", request.Filter),
                new Param("nameContains", request.NameContains),
                new Param("minCreationTime", request.MinCreationTime),
                new Param("maxCreationTime", request.MaxCreationTime),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnalyticsV1BudgetsResponse>(),
            ListBudgetsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a budget
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BudgetApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateBudgetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the specified budget.
    /// </remarks>
    public Task<BudgetApi> UpdateBudget(UpdateBudgetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/budgets/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BudgetApi>(),
            UpdateBudgetError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
