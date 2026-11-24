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
using AmazonLex.Requests.Testsets;

namespace AmazonLex.Api;

public sealed class Testsets
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Testsets(RawClient rawClient, Server server, AuthSchemes auth)
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
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTestSetDiscrepancyReport2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a report that describes the differences between the bot and the test set.
    /// </remarks>
    public Task<CreateTestSetDiscrepancyReportResponse> CreateTestSetDiscrepancyReport2(CreateTestSetDiscrepancyReport2Request request,
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
            CreateTestSetDiscrepancyReport2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Test Set
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteTestSetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The action to delete the selected test set.
    /// </remarks>
    public Task<string> DeleteTestSet(DeleteTestSetOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/testsets/{testSetId}"),
            [new TemplateParam("testSetId", request.TestSetId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<string>(),
            DeleteTestSetError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Test Set
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeTestSetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeTestSetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets metadata information about the test set.
    /// </remarks>
    public Task<DescribeTestSetResponse> DescribeTestSet(DescribeTestSetOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/testsets/{testSetId}"),
            [new TemplateParam("testSetId", request.TestSetId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeTestSetResponse>(),
            DescribeTestSetError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Test Set Records
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListTestSetRecordsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTestSetRecordsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The list of test set records.
    /// </remarks>
    public Task<ListTestSetRecordsResponse> ListTestSetRecords(ListTestSetRecordsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/testsets/{testSetId}/records"),
            [new TemplateParam("testSetId", request.TestSetId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListTestSetRecordsResponse>(),
            ListTestSetRecordsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Test Sets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListTestSetsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTestSetsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The list of the test sets
    /// </remarks>
    public Task<ListTestSetsResponse> ListTestSets(ListTestSetsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/testsets"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListTestSetsResponse>(),
            ListTestSetsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Test Execution
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartTestExecution2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The action to start test set execution.
    /// </remarks>
    public Task<StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi> StartTestExecution2(StartTestExecution2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/testsets/{testSetId}/testexecutions"),
            [new TemplateParam("testSetId", request.TestSetId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi>(),
            StartTestExecution2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Test Set
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateTestSetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateTestSetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The action to update the test set.
    /// </remarks>
    public Task<UpdateTestSetResponse> UpdateTestSet(UpdateTestSetOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/testsets/{testSetId}"),
            [new TemplateParam("testSetId", request.TestSetId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateTestSetResponse>(),
            UpdateTestSetError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
