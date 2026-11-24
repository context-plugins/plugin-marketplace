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
using AmazonDevOpsGuru.Requests.ServiceIntegrations;

namespace AmazonDevOpsGuru.Api;

public sealed class ServiceIntegrations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ServiceIntegrations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Describe Service Integration
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeServiceIntegrationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeServiceIntegrationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the integration status of services that are integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight.
    /// </remarks>
    public Task<DescribeServiceIntegrationResponse> DescribeServiceIntegration(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/service-integrations"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeServiceIntegrationResponse>(),
            DescribeServiceIntegrationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Service Integration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateServiceIntegrationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight.
    /// </remarks>
    public Task<object> UpdateServiceIntegration(UpdateServiceIntegrationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/service-integrations"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            UpdateServiceIntegrationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
