using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AwsXRay.Core;
using AwsXRay.Core.Exceptions;
using AwsXRay.Core.Models;
using AwsXRay.Core.Request;
using AwsXRay.Core.Response;
using AwsXRay.Errors;
using AwsXRay.Models;
using AwsXRay.Requests.Deletesamplingrule;

namespace AwsXRay.Api;

public sealed class Deletesamplingrule
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Deletesamplingrule(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete Sampling Rule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeleteSamplingRuleResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSamplingRuleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a sampling rule.
    /// </remarks>
    public Task<DeleteSamplingRuleResult> DeleteSamplingRule(DeleteSamplingRuleOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/DeleteSamplingRule"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DeleteSamplingRuleResult>(),
            DeleteSamplingRuleError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
