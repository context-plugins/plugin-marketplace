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
using Curlec.Requests.XTransactions;

namespace Curlec.Api;

/// <summary>
/// Fetch RazorpayX transaction records — credits (bank_transfer inflows) and debits (payout outflows)
/// </summary>
public sealed class XTransactions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal XTransactions(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Fetch a transaction by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="XTransaction"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchTransactionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch details of a specific transaction from a RazorpayX account by its ID.
    /// </remarks>
    public Task<XTransaction> FetchTransaction(FetchTransactionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/transactions/{transaction_id}"),
            [new TemplateParam("transaction_id", request.TransactionId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<XTransaction>(),
            FetchTransactionError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List transactions for a RazorpayX account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TransactionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTransactionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all transaction records (credits and debits) for a given RazorpayX account. Use account_number from Dashboard → My Account &amp; Settings → Banking → Customer Identifier.
    /// </remarks>
    public Task<TransactionsResponse> ListTransactions(ListTransactionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/transactions"),
            [],
            [
                new Param("account_number", request.AccountNumber),
                new Param("from", request.From),
                new Param("to", request.To),
                new Param("count", request.Count),
                new Param("skip", request.Skip),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TransactionsResponse>(),
            ListTransactionsError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
