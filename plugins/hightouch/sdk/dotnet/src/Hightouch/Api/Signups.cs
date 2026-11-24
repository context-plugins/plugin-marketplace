using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hightouch.Core;
using Hightouch.Core.Exceptions;
using Hightouch.Core.Models;
using Hightouch.Core.Request;
using Hightouch.Core.Response;
using Hightouch.Errors;
using Hightouch.Models.AnyOf;
using Hightouch.Requests.Signups;

namespace Hightouch.Api;

public sealed class Signups
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Signups(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Capture a signup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SignupsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSignupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Record a signup: consent for a delivery handle, plus the fields the form
    /// collected.
    /// <para>
    /// Whether consent settles immediately or waits for a double opt-in
    /// confirmation is the channel's configuration, so one call covers both and
    /// the response says which happened.
    /// </para>
    /// </remarks>
    public Task<SignupsResponse> CreateSignup(CreateSignupOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/signups"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SignupsResponse>(),
            CreateSignupError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
