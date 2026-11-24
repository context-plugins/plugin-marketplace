using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Curlec.Core;
using Curlec.Core.Authentication;
using Curlec.Core.Exceptions;
using Curlec.Core.Models;
using Curlec.Core.Request;
using Curlec.Core.Response;
using Curlec.Errors;
using Curlec.Models;
using Curlec.Requests.XBankingBalances;

namespace Curlec.Api;

/// <summary>
/// Fetch RazorpayX account balances
/// </summary>
public sealed class XBankingBalances
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal XBankingBalances(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Fetch RazorpayX banking balances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BankingBalancesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchBankingBalancesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch balance details for RazorpayX current accounts or RazorpayX Lite accounts.
    /// </remarks>
    public Task<BankingBalancesResponse> FetchBankingBalances(FetchBankingBalancesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/banking_balances"),
            [],
            [new Param("account_type", request.AccountType), new Param("bank_code", request.BankCode)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BankingBalancesResponse>(),
            FetchBankingBalancesError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
