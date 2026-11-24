using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bitly.Core;
using Bitly.Core.Exceptions;
using Bitly.Core.Models;
using Bitly.Core.Request;
using Bitly.Core.Response;
using Bitly.Errors;
using Bitly.Models;
using Bitly.Requests.Apps;

namespace Bitly.Api;

public sealed class Apps
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Apps(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve OAuth App
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OAuthApp"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOAuthAppError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details for the provided OAuth App client ID
    /// </remarks>
    public Task<OAuthApp> GetOAuthApp(GetOAuthAppRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/apps/{client_id}"),
            [new TemplateParam("client_id", request.ClientId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<OAuthApp>(),
            GetOAuthAppError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
