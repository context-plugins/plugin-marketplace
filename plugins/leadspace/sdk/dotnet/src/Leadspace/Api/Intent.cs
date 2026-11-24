using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Leadspace.Core;
using Leadspace.Core.Exceptions;
using Leadspace.Core.Models;
using Leadspace.Core.Request;
using Leadspace.Core.Response;
using Leadspace.Errors;
using Leadspace.Models;
using Leadspace.Requests.Intent;

namespace Leadspace.Api;

/// <summary>
/// Buyer-intent scoring and refresh
/// </summary>
public sealed class Intent
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Intent(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Submit companies for intent scoring
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IntentAccepted"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ScoreCompanyIntentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submits a bulk of companies for intent refresh. Company name is required. Returns a polling URI.
    /// </remarks>
    public Task<IntentAccepted> ScoreCompanyIntent(ScoreCompanyIntentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/intent/score/"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IntentAccepted>(),
            ScoreCompanyIntentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
