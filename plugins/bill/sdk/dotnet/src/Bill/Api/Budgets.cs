using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bill.Core;
using Bill.Core.Authentication;
using Bill.Core.Exceptions;
using Bill.Core.Models;
using Bill.Core.Request;
using Bill.Core.Response;
using Bill.Errors;
using Bill.Models;
using Bill.Requests.Budgets;

namespace Bill.Api;

public sealed class Budgets
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Budgets(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create a budget
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BudgetResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBudgetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new budget for a company.
    /// <para>
    /// See Budgets and Users in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<BudgetResponseDto> CreateBudget(CreateBudgetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/budgets"),
            [],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BudgetResponseDto>(),
            CreateBudgetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a budget
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteBudgetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an existing budget. A deleted budget cannot be restored. The deleted budget is not available in the list of budgets.
    /// <para>
    /// <b>Note</b>:
    /// * While you cannot restore a deleted budget with the API, you can unretire budgets in the BILL web app and mobile app. An unretired budget is active and is available for use.
    /// * A one-time budget can be unretired at any time. A <c>recurringInterval</c> budget can be unretired within one interval. For example, if a <c>MONTHLY</c> budget is retired in January, you can unretire it in February. You cannot unretire this budget in March or any later month.
    /// </para>
    /// </remarks>
    public Task DeleteBudget(DeleteBudgetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/budgets/{budgetId}"),
            [new TemplateParam("budgetId", request.BudgetId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteBudgetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a budget member
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteBudgetMemberError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a user member from an existing budget.
    /// </remarks>
    public Task DeleteBudgetMember(DeleteBudgetMemberRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/budgets/{budgetId}/members/{userId}"),
            [new TemplateParam("budgetId", request.BudgetId), new TemplateParam("userId", request.UserId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteBudgetMemberError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get budget details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BudgetResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBudgetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing budget.
    /// </remarks>
    public Task<BudgetResponseDto> GetBudget(GetBudgetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/budgets/{budgetId}"),
            [new TemplateParam("budgetId", request.BudgetId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BudgetResponseDto>(),
            GetBudgetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get budget member details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BudgetMemberResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBudgetMemberError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about a user member assigned to an existing budget.
    /// </remarks>
    public Task<BudgetMemberResponseDto> GetBudgetMember(GetBudgetMemberRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/budgets/{budgetId}/members/{userId}"),
            [new TemplateParam("budgetId", request.BudgetId), new TemplateParam("userId", request.UserId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BudgetMemberResponseDto>(),
            GetBudgetMemberError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of budget members
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginationResponseDtoBudgetMemberResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBudgetMembersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of user members assigned to an existing budget. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// </remarks>
    public Task<PaginationResponseDtoBudgetMemberResponseDto> ListBudgetMembers(ListBudgetMembersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/budgets/{budgetId}/members"),
            [new TemplateParam("budgetId", request.BudgetId)],
            [
                new Param("max", request.Max),
                new Param("nextPage", request.NextPage),
                new Param("prevPage", request.PrevPage),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
            ],
            [new HeaderParam("apiToken", request.ApiToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginationResponseDtoBudgetMemberResponseDto>(),
            ListBudgetMembersError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of budgets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginationResponseDtoBudgetResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBudgetsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of budget objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// </remarks>
    public Task<PaginationResponseDtoBudgetResponseDto> ListBudgets(ListBudgetsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/budgets"),
            [],
            [
                new Param("nextPage", request.NextPage),
                new Param("prevPage", request.PrevPage),
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
            ],
            [new HeaderParam("apiToken", request.ApiToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginationResponseDtoBudgetResponseDto>(),
            ListBudgetsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a budget
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BudgetResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateBudgetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about an existing budget.
    /// </remarks>
    public Task<BudgetResponseDto> UpdateBudget(UpdateBudgetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/budgets/{budgetId}"),
            [new TemplateParam("budgetId", request.BudgetId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BudgetResponseDto>(),
            UpdateBudgetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add or update a budget member
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BudgetMemberResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpsertBudgetMemberError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add a new user member to an existing budget. You can also update details about an existing user member assigned to the budget.
    /// </remarks>
    public Task<BudgetMemberResponseDto> UpsertBudgetMember(UpsertBudgetMemberRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/budgets/{budgetId}/members/{userId}"),
            [new TemplateParam("budgetId", request.BudgetId), new TemplateParam("userId", request.UserId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BudgetMemberResponseDto>(),
            UpsertBudgetMemberError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update multiple budget members
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SpendStatusDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpsertBulkBudgetUsersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about multiple user members assigned to an existing budget.
    /// </remarks>
    public Task<SpendStatusDto> UpsertBulkBudgetUsers(UpsertBulkBudgetUsersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/spend/budgets/{budgetId}/members/bulk"),
            [new TemplateParam("budgetId", request.BudgetId)],
            [],
            [new HeaderParam("apiToken", request.ApiToken), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SpendStatusDto>(),
            UpsertBulkBudgetUsersError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
