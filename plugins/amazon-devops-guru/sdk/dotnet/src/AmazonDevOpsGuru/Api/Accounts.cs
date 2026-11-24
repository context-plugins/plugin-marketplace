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
using AmazonDevOpsGuru.Requests.Accounts;

namespace AmazonDevOpsGuru.Api;

public sealed class Accounts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Accounts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Describe Account Health
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeAccountHealthResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeAccountHealthError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in your Amazon Web Services account.
    /// </remarks>
    public Task<DescribeAccountHealthResponse> DescribeAccountHealth(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/accounts/health"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeAccountHealthResponse>(),
            DescribeAccountHealthError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Account Overview
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeAccountOverviewResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeAccountOverviewError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights.
    /// </remarks>
    public Task<DescribeAccountOverviewResponse> DescribeAccountOverview(DescribeAccountOverviewRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/accounts/overview"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DescribeAccountOverviewResponse>(),
            DescribeAccountOverviewError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Resource Collection Health
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeResourceCollectionHealthResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeResourceCollectionHealthError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR) for all closed insights in resource collections in your account. You specify the type of Amazon Web Services resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.
    /// </remarks>
    public Task<DescribeResourceCollectionHealthResponse> DescribeResourceCollectionHealth(DescribeResourceCollectionHealthRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/accounts/health/resource-collection/{ResourceCollectionType}"),
            [new TemplateParam("ResourceCollectionType", request.ResourceCollectionType)],
            [new Param("NextToken", request.NextToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeResourceCollectionHealthResponse>(),
            DescribeResourceCollectionHealthError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
