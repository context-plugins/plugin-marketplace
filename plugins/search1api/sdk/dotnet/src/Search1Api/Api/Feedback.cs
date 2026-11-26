using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Search1Api.Core;
using Search1Api.Core.Exceptions;
using Search1Api.Core.Models;
using Search1Api.Core.Request;
using Search1Api.Core.Response;
using Search1Api.Errors;
using Search1Api.Models;
using Search1Api.Requests.Feedback;

namespace Search1Api.Api;

public sealed class Feedback
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Feedback(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Report a Search1API problem or feature request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FeedbackResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FeedbackError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Report a Search1API problem, missing capability, or confusing documentation encountered during a task. Only message is required. Optional request_id refers to the original problem request. Do not include credentials, personal data, or private user content. Reports are stored in Agent Feedback and linked to an opaque account reference. Do not report every empty result or retry the same report automatically; feedback should not block the main task. Returns 201 only after storage succeeds. Maximum JSON body size: 16 KiB. Limited to 10 submissions per account per minute at a Cloudflare location. Free to call.
    /// </remarks>
    public Task<FeedbackResponse> FeedbackInvoke(FeedbackOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/feedback"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FeedbackResponse>(),
            FeedbackError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
