using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Basiq.Core;
using Basiq.Core.Exceptions;
using Basiq.Core.Models;
using Basiq.Core.Request;
using Basiq.Core.Response;
using Basiq.Errors;
using Basiq.Models;
using Basiq.Requests.Transactions;

namespace Basiq.Api;

public sealed class Transactions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Transactions(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve a transaction
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UsersTransactionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTransactionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve an existing transaction
    /// </remarks>
    public Task<UsersTransactionsResponse> GetTransaction(GetTransactionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/transactions/{transactionId}"),
            [new TemplateParam("userId", request.UserId), new TemplateParam("transactionId", request.TransactionId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UsersTransactionsResponse>(),
            GetTransactionError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all transactions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TransactionsContainerObjectConnectTransactionsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTransactionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all transactions belonging to a specified user
    /// </remarks>
    public Task<TransactionsContainerObjectConnectTransactionsApi> GetTransactions(GetTransactionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/transactions"),
            [new TemplateParam("userId", request.UserId)],
            [new Param("limit", request.Limit), new Param("filter", request.Filter)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TransactionsContainerObjectConnectTransactionsApi>(),
            GetTransactionsError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);
}
