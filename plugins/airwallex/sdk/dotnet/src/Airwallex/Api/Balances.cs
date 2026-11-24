using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Airwallex.Core;
using Airwallex.Core.Authentication;
using Airwallex.Core.ErrorResponse;
using Airwallex.Core.Exceptions;
using Airwallex.Core.Request;
using Airwallex.Core.Response;

namespace Airwallex.Api;

public sealed class Balances
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Balances(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get current account balances
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task GetCurrentBalances(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/balances/current"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, AuthScheme.All(_auth.ClientIdHeader, _auth.ApiKeyHeader)),
            requestOptions,
            cancellationToken);
}
