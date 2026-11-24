using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Celestia.Core;
using Celestia.Core.ErrorResponse;
using Celestia.Core.Exceptions;
using Celestia.Core.Models;
using Celestia.Core.Request;
using Celestia.Core.Response;
using Celestia.Models;
using Celestia.Requests.Blob;

namespace Celestia.Api;

/// <summary>
/// Submit, retrieve, and prove blobs against Celestia namespaces.
/// </summary>
public sealed class Blob
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Blob(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Invoke Blob JSON-RPC Method
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JsonRpcResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Single JSON-RPC entrypoint exposing the <c>blob.*</c> namespace including
    /// <c>blob.Submit</c>, <c>blob.Get</c>, <c>blob.GetAll</c>, <c>blob.GetProof</c>, <c>blob.Included</c>,
    /// and <c>blob.Subscribe</c>. Authenticate with a bearer token generated via
    /// <c>celestia auth </c>.
    /// </remarks>
    public Task<JsonRpcResponse> PostRoot(PostRootRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<JsonRpcResponse>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
