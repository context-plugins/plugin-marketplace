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
using AmazonDevOpsGuru.Requests.Organization;

namespace AmazonDevOpsGuru.Api;

public sealed class Organization
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Organization(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Describe Organization Health
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeOrganizationHealthResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeOrganizationHealthError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns active insights, predictive insights, and resource hours analyzed in last hour.
    /// </remarks>
    public Task<DescribeOrganizationHealthResponse> DescribeOrganizationHealth(DescribeOrganizationHealthRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/organization/health"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DescribeOrganizationHealthResponse>(),
            DescribeOrganizationHealthError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Organization Overview
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeOrganizationOverviewResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeOrganizationOverviewError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns an overview of your organization's history based on the specified time range. The overview includes the total reactive and proactive insights.
    /// </remarks>
    public Task<DescribeOrganizationOverviewResponse> DescribeOrganizationOverview(DescribeOrganizationOverviewRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/organization/overview"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DescribeOrganizationOverviewResponse>(),
            DescribeOrganizationOverviewError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Organization Resource Collection Health
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeOrganizationResourceCollectionHealthResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeOrganizationResourceCollectionHealthError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides an overview of your system's health. If additional member accounts are part of your organization, you can filter those accounts using the AccountIds field.
    /// </remarks>
    public Task<DescribeOrganizationResourceCollectionHealthResponse> DescribeOrganizationResourceCollectionHealth(DescribeOrganizationResourceCollectionHealthRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/organization/health/resource-collection"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DescribeOrganizationResourceCollectionHealthResponse>(),
            DescribeOrganizationResourceCollectionHealthError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Organization Insights
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListOrganizationInsightsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListOrganizationInsightsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of insights associated with the account or OU Id.
    /// </remarks>
    public Task<ListOrganizationInsightsResponse> ListOrganizationInsights(ListOrganizationInsightsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/organization/insights"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListOrganizationInsightsResponse>(),
            ListOrganizationInsightsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Organization Insights
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchOrganizationInsightsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchOrganizationInsightsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of insights in your organization. You can specify which insights are returned by their start time, one or more statuses (ONGOING, CLOSED, and CLOSED), one or more severities (LOW, MEDIUM, and HIGH), and type (REACTIVE or PROACTIVE). Use the Filters parameter to specify status and severity search parameters. Use the Type parameter to specify REACTIVE or PROACTIVE in your search.
    /// </remarks>
    public Task<SearchOrganizationInsightsResponse> SearchOrganizationInsights(SearchOrganizationInsightsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/organization/insights/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SearchOrganizationInsightsResponse>(),
            SearchOrganizationInsightsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
