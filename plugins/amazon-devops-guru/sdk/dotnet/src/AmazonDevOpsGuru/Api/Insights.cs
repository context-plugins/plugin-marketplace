using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonDevOpsGuru.Core;
using AmazonDevOpsGuru.Core.Exceptions;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Core.Request;
using AmazonDevOpsGuru.Core.Response;
using AmazonDevOpsGuru.Errors;
using AmazonDevOpsGuru.Models;
using AmazonDevOpsGuru.Requests.Insights;

namespace AmazonDevOpsGuru.Api;

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
    /// Delete Insight
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteInsightError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the insight along with the associated anomalies, events and recommendations.
    /// </remarks>
    public Task<object> DeleteInsight(DeleteInsightRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/insights/{Id}"),
            [new TemplateParam("Id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteInsightError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Insight
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeInsightResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeInsightError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns details about an insight that you specify using its ID.
    /// </remarks>
    public Task<DescribeInsightResponse> DescribeInsight(DescribeInsightRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/insights/{Id}"),
            [new TemplateParam("Id", request.Id)],
            [new Param("AccountId", request.AccountId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeInsightResponse>(),
            DescribeInsightError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Insights
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListInsightsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListInsightsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time and status (ONGOING, CLOSED, or ANY).
    /// </remarks>
    public Task<ListInsightsResponse> ListInsights(ListInsightsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/insights"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListInsightsResponse>(),
            ListInsightsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Insights
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchInsightsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchInsightsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time, one or more statuses (ONGOING or CLOSED), one or more severities (LOW, MEDIUM, and HIGH), and type (REACTIVE or PROACTIVE). Use the Filters parameter to specify status and severity search parameters. Use the Type parameter to specify REACTIVE or PROACTIVE in your search.
    /// </remarks>
    public Task<SearchInsightsResponse> SearchInsights(SearchInsightsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/insights/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SearchInsightsResponse>(),
            SearchInsightsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
