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
using AmazonDevOpsGuru.Requests.CostEstimation;

namespace AmazonDevOpsGuru.Api;

public sealed class CostEstimation
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CostEstimation(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Cost Estimation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetCostEstimationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCostEstimationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources. For more information, see Estimate your Amazon DevOps Guru costs and Amazon DevOps Guru pricing.
    /// </remarks>
    public Task<GetCostEstimationResponse> GetCostEstimation(GetCostEstimationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/cost-estimation"),
            [],
            [new Param("NextToken", request.NextToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetCostEstimationResponse>(),
            GetCostEstimationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Cost Estimation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartCostEstimationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services resources.
    /// </remarks>
    public Task<object> StartCostEstimation(StartCostEstimationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/cost-estimation"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            StartCostEstimationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
