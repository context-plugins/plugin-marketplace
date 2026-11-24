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
using AmazonLex.Requests.Testexecutions;

namespace AmazonLex.Api;

public sealed class Testexecutions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Testexecutions(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Describe Test Execution
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeTestExecutionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeTestExecutionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets metadata information about the test execution.
    /// </remarks>
    public Task<DescribeTestExecutionResponse> DescribeTestExecution(DescribeTestExecutionOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/testexecutions/{testExecutionId}"),
            [new TemplateParam("testExecutionId", request.TestExecutionId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeTestExecutionResponse>(),
            DescribeTestExecutionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Test Execution Artifacts Url
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetTestExecutionArtifactsUrlResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTestExecutionArtifactsUrlError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The pre-signed Amazon S3 URL to download the test execution result artifacts.
    /// </remarks>
    public Task<GetTestExecutionArtifactsUrlResponse> GetTestExecutionArtifactsUrl(GetTestExecutionArtifactsUrlOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/testexecutions/{testExecutionId}/artifacturl"),
            [new TemplateParam("testExecutionId", request.TestExecutionId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetTestExecutionArtifactsUrlResponse>(),
            GetTestExecutionArtifactsUrlError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Test Execution Result Items
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListTestExecutionResultItemsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTestExecutionResultItemsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of test execution result items.
    /// </remarks>
    public Task<ListTestExecutionResultItemsResponse> ListTestExecutionResultItems(ListTestExecutionResultItemsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/testexecutions/{testExecutionId}/results"),
            [new TemplateParam("testExecutionId", request.TestExecutionId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListTestExecutionResultItemsResponse>(),
            ListTestExecutionResultItemsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Test Executions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListTestExecutionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTestExecutionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The list of test set executions.
    /// </remarks>
    public Task<ListTestExecutionsResponse> ListTestExecutions(ListTestExecutionsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/testexecutions"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListTestExecutionsResponse>(),
            ListTestExecutionsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Test Execution
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StartTestExecutionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartTestExecutionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The action to start test set execution.
    /// </remarks>
    public Task<StartTestExecutionResponse> StartTestExecution(StartTestExecutionOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/testsets/{testSetId}/testexecutions"),
            [new TemplateParam("testSetId", request.TestSetId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StartTestExecutionResponse>(),
            StartTestExecutionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
