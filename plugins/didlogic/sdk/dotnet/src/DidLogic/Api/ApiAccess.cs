using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DidLogic.Core;
using DidLogic.Core.Exceptions;
using DidLogic.Core.Request;
using DidLogic.Core.Response;
using DidLogic.Errors;
using DidLogic.Models;

namespace DidLogic.Api;

public sealed class ApiAccess
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ApiAccess(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List API capabilities
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CapabilitiesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CapabilitiesShowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the API operations your key may call, and the account it belongs to.
    /// <para>
    /// Your account decides which parts of the API are open to it: API v1, buying and
    /// browsing numbers, SIP accounts, Click2Call, call recordings, the ASR report,
    /// sending SMS, risk checks and HLR lookups. This operation answers for any valid
    /// key, whatever is enabled, so it is also the cheapest way to check that a key
    /// works.
    /// </para>
    /// <para>
    /// Each entry is an HTTP method and a path exactly as this reference spells it,
    /// path parameters included (<c>/api/v1/sipaccounts/{id}</c>). An operation missing from
    /// the list is refused for your account. Checks that depend on the request itself,
    /// such as the number you ask for or a rate limit, are not reflected here.
    /// </para>
    /// <para>
    /// This operation does not list itself. An invalid key gets <c>401 Unauthorized</c>.
    /// </para>
    /// </remarks>
    public Task<ApiV1CapabilitiesResponse> CapabilitiesShow(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/capabilities"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1CapabilitiesResponse>(),
            CapabilitiesShowError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
