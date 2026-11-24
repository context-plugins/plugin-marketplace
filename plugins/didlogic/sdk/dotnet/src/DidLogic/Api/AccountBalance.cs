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

public sealed class AccountBalance
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AccountBalance(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get account balance
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1BalanceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BalanceShowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the current account balance for the authenticated user.
    /// <para>
    /// <b>Balance Representation:</b>
    /// - Returns balance in account currency (typically USD)
    /// - Value is rounded to 2 decimal places
    /// - Supports both JSON and plain text formats
    /// </para>
    /// </remarks>
    public Task<ApiV1BalanceResponse> BalanceShow(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/balance"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1BalanceResponse>(),
            BalanceShowError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
