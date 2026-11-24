using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Deliverd.Core;
using Deliverd.Core.Authentication;
using Deliverd.Core.ErrorResponse;
using Deliverd.Core.Exceptions;
using Deliverd.Core.Models;
using Deliverd.Core.Request;
using Deliverd.Core.Response;
using Deliverd.Models;
using Deliverd.Requests.Evidence;

namespace Deliverd.Api;

public sealed class Evidence
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Evidence(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Verify an evidence pack — no credential
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1EvidenceVerifyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send an evidence pack exactly as the JSON export produced it. The answer says whether its digest recomputes (the file matches itself) and whether its Ed25519 signature checks out against this deployment's current key, published at <c>/.well-known/deliverd-evidence-key</c>. Nothing is stored. <c>deliverd verify </c> makes the same check offline, which does not rely on asking us.
    /// </remarks>
    public Task<ApiV1EvidenceVerifyResponse> PostApiV1EvidenceVerify(PostApiV1EvidenceVerifyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/evidence/verify"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1EvidenceVerifyResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
