using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Basiq.Core;
using Basiq.Core.Exceptions;
using Basiq.Core.Models;
using Basiq.Core.Request;
using Basiq.Core.Response;
using Basiq.Errors;
using Basiq.Models;
using Basiq.Requests.Insights;

namespace Basiq.Api;

public sealed class Insights
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Insights(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create an Insight
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PostInsightsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateInsightError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new insight for one or more users. Supported insight types are EXPENSE_RATIO_VERIFICATION, BALANCE_VERIFICATION, ACCOUNT_VERIFICATION, IDENTITY_VERIFICATION, and INCOME_VERIFICATION. Multi-user requests (1–10 users) are currently supported only for EXPENSE_RATIO_VERIFICATION.A single insight object is created referencing all users. The self link in the response uses the first userId from the users array.
    /// </remarks>
    public Task<PostInsightsResponse> CreateInsight(CreateInsightRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/insights"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PostInsightsResponse>(),
            CreateInsightError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Account Insights
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccountInsightResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAccountInsightsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve account insights for a specific user based on account number
    /// </remarks>
    public Task<AccountInsightResponse> GetAccountInsights(GetAccountInsightsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/insights/account"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AccountInsightResponse>(),
            GetAccountInsightsError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Account Balance Insights
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BalanceInsightResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBalanceInsightsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve balance insights for a user's accounts based on specified minimum and maximum balance criteria
    /// </remarks>
    public Task<BalanceInsightResponse> GetBalanceInsights(GetBalanceInsightsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/insights/balance"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BalanceInsightResponse>(),
            GetBalanceInsightsError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Expense Ratio Insights
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExpenseRatioInsightResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetExpenseRatioInsightsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate and return the expense-to-income ratio.
    /// </remarks>
    public Task<ExpenseRatioInsightResponse> GetExpenseRatioInsights(GetExpenseRatioInsightsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/insights/expense-ratio"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ExpenseRatioInsightResponse>(),
            GetExpenseRatioInsightsError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Identity Insights
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IdentityInsightResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetIdentityInsightsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve identity insights for a specific user by comparing provided personal details (name, phone, email, address).
    /// </remarks>
    public Task<IdentityInsightResponse> GetIdentityInsights(GetIdentityInsightsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/insights/identity"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IdentityInsightResponse>(),
            GetIdentityInsightsError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve an Insight
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Insight"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetInsightByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns detailed information for a specific insight by ID
    /// </remarks>
    public Task<Insight> GetInsightById(GetInsightByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/insights/{insightId}"),
            [new TemplateParam("userId", request.UserId), new TemplateParam("insightId", request.InsightId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Insight>(),
            GetInsightByIdError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Insight Type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InsightTypeItem"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetInsightTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the definition of a single supported CDR Insight type identified by <c>{typeId}</c>.
    /// </remarks>
    public Task<InsightTypeItem> GetInsightType(GetInsightTypeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/insights/types/{typeId}"),
            [new TemplateParam("typeId", request.TypeId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<InsightTypeItem>(),
            GetInsightTypeError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Insight Types
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InsightTypesList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetInsightTypesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the list of supported CDR Insight types and the Insight-specific input schema (<c>data</c>) each type expects.
    /// </remarks>
    public Task<InsightTypesList> GetInsightTypes(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/insights/types"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<InsightTypesList>(),
            GetInsightTypesError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all Insights
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InsightListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListUserInsightsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of previously generated insights for the specified user. Supports filtering by creation date and insight type. Maximum 20 insights per page.
    /// </remarks>
    public Task<InsightListResponse> ListUserInsights(ListUserInsightsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/insights"),
            [new TemplateParam("userId", request.UserId)],
            [new Param("filter", request.Filter)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<InsightListResponse>(),
            ListUserInsightsError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Income Insights
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IncomeInsightResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VerifyIncomeInsightError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Verifies if a user's income falls within a specified range. Returns a match result with confidence level based on the user's financial data.
    /// </remarks>
    public Task<IncomeInsightResponse> VerifyIncomeInsight(VerifyIncomeInsightRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/insights/income"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IncomeInsightResponse>(),
            VerifyIncomeInsightError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);
}
