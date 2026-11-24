using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonTranscribe.Core;
using AmazonTranscribe.Core.Exceptions;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Core.Request;
using AmazonTranscribe.Core.Response;
using AmazonTranscribe.Errors;
using AmazonTranscribe.Requests.CallAnalyticsCategory;

namespace AmazonTranscribe.Api;

public sealed class CallAnalyticsCategory
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CallAnalyticsCategory(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Call Analytics Category
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCallAnalyticsCategoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new Call Analytics category. All categories are automatically applied to your Call Analytics transcriptions. Note that in order to apply categories to your transcriptions, you must create them before submitting your transcription request, as categories cannot be applied retroactively. When creating a new category, you can use the InputType parameter to label the category as a POST_CALL or a REAL_TIME category. POST_CALL categories can only be applied to post-call transcriptions and REAL_TIME categories can only be applied to real-time transcriptions. If you do not include InputType, your category is created as a POST_CALL category by default. Call Analytics categories are composed of rules. For each category, you must create between 1 and 20 rules. Rules can include these parameters: , , , and . To update an existing category, see . To learn more about Call Analytics categories, see Creating categories for post-call transcriptions and Creating categories for real-time transcriptions.
    /// </remarks>
    public Task CreateCallAnalyticsCategory(CreateCallAnalyticsCategoryOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateCallAnalyticsCategory"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateCallAnalyticsCategoryError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Call Analytics Category
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCallAnalyticsCategoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a Call Analytics category. To use this operation, specify the name of the category you want to delete using CategoryName. Category names are case sensitive.
    /// </remarks>
    public Task DeleteCallAnalyticsCategory(DeleteCallAnalyticsCategoryOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteCallAnalyticsCategory"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteCallAnalyticsCategoryError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Call Analytics Category
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCallAnalyticsCategoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides information about the specified Call Analytics category. To get a list of your Call Analytics categories, use the operation.
    /// </remarks>
    public Task GetCallAnalyticsCategory(GetCallAnalyticsCategoryOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#GetCallAnalyticsCategory"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetCallAnalyticsCategoryError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Call Analytics Categories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCallAnalyticsCategoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides a list of Call Analytics categories, including all rules that make up each category. To get detailed information about a specific Call Analytics category, use the operation.
    /// </remarks>
    public Task ListCallAnalyticsCategories(ListCallAnalyticsCategoriesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListCallAnalyticsCategories"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListCallAnalyticsCategoriesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Call Analytics Category
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCallAnalyticsCategoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the specified Call Analytics category with new rules. Note that the UpdateCallAnalyticsCategory operation overwrites all existing rules contained in the specified category. You cannot append additional rules onto an existing category. To create a new category, see .
    /// </remarks>
    public Task UpdateCallAnalyticsCategory(UpdateCallAnalyticsCategoryOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateCallAnalyticsCategory"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateCallAnalyticsCategoryError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
