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
using Deliverd.Requests.Drafts;

namespace Deliverd.Api;

public sealed class Drafts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Drafts(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Publish now, claim later — no credential
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1DraftsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// For an AI with no Deliverd connection. Send an HTML document (JSON <c>{ html, title?, sourceTool? }</c> or a raw <c>text/html</c> body) and give the person the <c>claimUrl</c> that comes back. They sign in, or create a free account, and publish it with one click; it is private to them until they share it. Nothing is served from a draft before then. Drafts are scanned for credentials, capped at 2 MB, rate limited per address, single use, and expire after 24 hours. Answers <c>413 too_large</c>, <c>422 scan_blocked</c> or <c>429 rate_limited</c> when refused.
    /// </remarks>
    public Task<ApiV1DraftsResponse> PostApiV1Drafts(PostApiV1DraftsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/drafts"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1DraftsResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
