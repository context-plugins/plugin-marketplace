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
using AwsXRay.Requests.GetGroup;

namespace AwsXRay.Api;

public sealed class GetGroup
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal GetGroup(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetGroupResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves group resource details.
    /// </remarks>
    public Task<GetGroupResult> GetGroupInvoke(GetGroupOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/GetGroup"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GetGroupResult>(),
            GetGroupError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
