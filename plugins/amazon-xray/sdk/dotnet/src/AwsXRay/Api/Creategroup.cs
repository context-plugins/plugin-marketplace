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
using AwsXRay.Requests.Creategroup;

namespace AwsXRay.Api;

public sealed class Creategroup
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Creategroup(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateGroupResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a group resource with a name and a filter expression.
    /// </remarks>
    public Task<CreateGroupResult> CreateGroup(CreateGroupOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/CreateGroup"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateGroupResult>(),
            CreateGroupError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
