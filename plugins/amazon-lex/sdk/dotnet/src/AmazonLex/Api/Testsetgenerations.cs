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
using AmazonLex.Requests.Testsetgenerations;

namespace AmazonLex.Api;

public sealed class Testsetgenerations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Testsetgenerations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Describe Test Set Generation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeTestSetGenerationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeTestSetGenerationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets metadata information about the test set generation.
    /// </remarks>
    public Task<DescribeTestSetGenerationResponse> DescribeTestSetGeneration(DescribeTestSetGenerationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/testsetgenerations/{testSetGenerationId}"),
            [new TemplateParam("testSetGenerationId", request.TestSetGenerationId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeTestSetGenerationResponse>(),
            DescribeTestSetGenerationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Test Set Generation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StartTestSetGenerationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartTestSetGenerationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The action to start the generation of test set.
    /// </remarks>
    public Task<StartTestSetGenerationResponse> StartTestSetGeneration(StartTestSetGenerationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/testsetgenerations"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StartTestSetGenerationResponse>(),
            StartTestSetGenerationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
