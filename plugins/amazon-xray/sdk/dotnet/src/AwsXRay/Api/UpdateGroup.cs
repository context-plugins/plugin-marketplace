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
using AwsXRay.Requests.UpdateGroup;

namespace AwsXRay.Api;

public sealed class UpdateGroup
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal UpdateGroup(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Update Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateGroupResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a group resource.
    /// </remarks>
    public Task<UpdateGroupResult> UpdateGroupInvoke(UpdateGroupOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/UpdateGroup"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateGroupResult>(),
            UpdateGroupError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
