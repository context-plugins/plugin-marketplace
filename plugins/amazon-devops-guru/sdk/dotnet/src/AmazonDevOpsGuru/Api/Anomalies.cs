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
using AmazonDevOpsGuru.Requests.Anomalies;

namespace AmazonDevOpsGuru.Api;

public sealed class Anomalies
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Anomalies(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Describe Anomaly
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeAnomalyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeAnomalyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns details about an anomaly that you specify using its ID.
    /// </remarks>
    public Task<DescribeAnomalyResponse> DescribeAnomaly(DescribeAnomalyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/anomalies/{Id}"),
            [new TemplateParam("Id", request.Id)],
            [new Param("AccountId", request.AccountId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeAnomalyResponse>(),
            DescribeAnomalyError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Anomalies For Insight
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListAnomaliesForInsightResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAnomaliesForInsightError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of the anomalies that belong to an insight that you specify using its ID.
    /// </remarks>
    public Task<ListAnomaliesForInsightResponse> ListAnomaliesForInsight(ListAnomaliesForInsightRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/anomalies/insight/{InsightId}"),
            [new TemplateParam("InsightId", request.InsightId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListAnomaliesForInsightResponse>(),
            ListAnomaliesForInsightError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
