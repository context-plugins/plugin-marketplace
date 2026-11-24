using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Archbee.Core;
using Archbee.Core.Exceptions;
using Archbee.Core.Models;
using Archbee.Core.Request;
using Archbee.Core.Response;
using Archbee.Errors;
using Archbee.Models;
using Archbee.Requests.AccessControl;

namespace Archbee.Api;

/// <summary>
/// Magic-link access requests for gated portals
/// </summary>
public sealed class AccessControl
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AccessControl(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Request Magic Link Access
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccessControlRequestResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RequestMagicLinkAccessError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submit a reader's email as a pending request to be added to the space's magic-link whitelist. The request does NOT grant access on its own — an admin must approve it. The space must be configured for Magic Link (Magic Link enabled, the portal gating content, and the team's plan allowing it); otherwise the request is refused with 400. There is one request per (email, space). A repeat request for the same email is idempotent per status: a Pending request returns the existing row unchanged; an Accepted request whose email is still whitelisted also returns it unchanged; but an Accepted request whose access was later revoked, or a previously Rejected request, is put back into the Pending queue and re-notifies the admins — so a rejected or revoked reader can always re-apply.
    /// </remarks>
    public Task<AccessControlRequestResponse> RequestMagicLinkAccess(RequestMagicLinkAccessRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/access-control/request"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AccessControlRequestResponse>(),
            RequestMagicLinkAccessError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
