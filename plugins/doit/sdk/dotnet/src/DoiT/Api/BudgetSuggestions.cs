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
using DoiT.Requests.BudgetSuggestions;

namespace DoiT.Api;

/// <summary>
/// AI-generated budget recommendations you can accept (link to a budget you created) or dismiss.
/// </summary>
public sealed class BudgetSuggestions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal BudgetSuggestions(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Accept a budget suggestion
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnalyticsV1BudgetSuggestionsActionsAcceptResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AcceptBudgetSuggestionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Marks the suggestion as accepted and links it to an existing budget. Create the budget first via
    /// <c>POST /analytics/v1/budgets</c>, then pass its <c>id</c> as <c>budgetId</c>. The budget must belong to your account.
    /// </remarks>
    public Task<AnalyticsV1BudgetSuggestionsActionsAcceptResponse> AcceptBudgetSuggestion(AcceptBudgetSuggestionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/budget-suggestions/{id}/actions/accept"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AnalyticsV1BudgetSuggestionsActionsAcceptResponse>(),
            AcceptBudgetSuggestionError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Dismiss a budget suggestion
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnalyticsV1BudgetSuggestionsActionsDismissResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DismissBudgetSuggestionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Marks the suggestion as dismissed so it no longer appears in the pending list.
    /// </remarks>
    public Task<AnalyticsV1BudgetSuggestionsActionsDismissResponse> DismissBudgetSuggestion(DismissBudgetSuggestionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/budget-suggestions/{id}/actions/dismiss"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AnalyticsV1BudgetSuggestionsActionsDismissResponse>(),
            DismissBudgetSuggestionError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List budget suggestions
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnalyticsV1BudgetSuggestionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBudgetSuggestionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the pending AI-generated budget suggestions for your account. The set is small (a handful
    /// of pending suggestions) and is returned in full. Each suggestion can be accepted (after you create a
    /// matching budget via <c>POST /analytics/v1/budgets</c>) or dismissed.
    /// </remarks>
    public Task<AnalyticsV1BudgetSuggestionsResponse> ListBudgetSuggestions(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/budget-suggestions"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnalyticsV1BudgetSuggestionsResponse>(),
            ListBudgetSuggestionsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
