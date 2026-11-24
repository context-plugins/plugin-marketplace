using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonLex.Core;
using AmazonLex.Core.Exceptions;
using AmazonLex.Core.Models;
using AmazonLex.Core.Request;
using AmazonLex.Core.Response;
using AmazonLex.Errors;
using AmazonLex.Models;
using AmazonLex.Requests.Testsetdiscrepancy;

namespace AmazonLex.Api;

public sealed class Testsetdiscrepancy
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Testsetdiscrepancy(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Test Set Discrepancy Report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateTestSetDiscrepancyReportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTestSetDiscrepancyReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a report that describes the differences between the bot and the test set.
    /// </remarks>
    public Task<CreateTestSetDiscrepancyReportResponse> CreateTestSetDiscrepancyReport(CreateTestSetDiscrepancyReportOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/testsets/{testSetId}/testsetdiscrepancy"),
            [new TemplateParam("testSetId", request.TestSetId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateTestSetDiscrepancyReportResponse>(),
            CreateTestSetDiscrepancyReportError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Test Set Discrepancy Report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeTestSetDiscrepancyReportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeTestSetDiscrepancyReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets metadata information about the test set discrepancy report.
    /// </remarks>
    public Task<DescribeTestSetDiscrepancyReportResponse> DescribeTestSetDiscrepancyReport(DescribeTestSetDiscrepancyReportOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/testsetdiscrepancy/{testSetDiscrepancyReportId}"),
            [new TemplateParam("testSetDiscrepancyReportId", request.TestSetDiscrepancyReportId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeTestSetDiscrepancyReportResponse>(),
            DescribeTestSetDiscrepancyReportError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
