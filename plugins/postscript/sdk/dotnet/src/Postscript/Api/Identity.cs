using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Postscript.Core;
using Postscript.Core.Exceptions;
using Postscript.Core.Models;
using Postscript.Core.Request;
using Postscript.Core.Response;
using Postscript.Errors;
using Postscript.Models;
using Postscript.Requests.Identity;

namespace Postscript.Api;

/// <summary>
/// Verify the identity and scope of the calling API token.
/// </summary>
public sealed class Identity
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Identity(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Verify Identity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2MeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VerifyIdentityError"/> when the server returns an error response.</exception>
    public Task<ApiV2MeResponse> VerifyIdentity(VerifyIdentityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/me"),
            [],
            [],
            [new HeaderParam("X-Postscript-Shop-Token", request.XPostscriptShopToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2MeResponse>(),
            VerifyIdentityError.Response,
            _auth.Sec0,
            requestOptions,
            cancellationToken);
}
