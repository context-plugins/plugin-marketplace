using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Givebutter.Core;
using Givebutter.Core.Exceptions;
using Givebutter.Core.Extensions;
using Givebutter.Core.Models;
using Givebutter.Core.Request;
using Givebutter.Core.Response;
using Givebutter.Errors;
using Givebutter.Models;
using Givebutter.Models.AnyOf;
using Givebutter.Requests.Transactions;

namespace Givebutter.Api;

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
    /// List all transactions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TransactionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TransactionsIndexError"/> when the server returns an error response.</exception>
    public Task<V1TransactionsResponse> TransactionsIndex(TransactionsIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/transactions"),
            [],
            [
                new Param("transactedAfter", request.TransactedAfter?.ToIso8601()),
                new Param("transactedBefore", request.TransactedBefore?.ToIso8601()),
                new Param("createdAfter", request.CreatedAfter?.ToIso8601()),
                new Param("createdBefore", request.CreatedBefore?.ToIso8601()),
                new Param("updatedAfter", request.UpdatedAfter?.ToIso8601()),
                new Param("updatedBefore", request.UpdatedBefore?.ToIso8601()),
                new Param("checkDepositedAfter", request.CheckDepositedAfter?.ToIso8601()),
                new Param("checkDepositedBefore", request.CheckDepositedBefore?.ToIso8601()),
                new Param("contacts", request.Contacts),
                new Param("method", request.Method),
                new Param("scope", request.Scope),
                new Param("sortBy", request.SortBy),
                new Param("sortByDesc", request.SortByDesc),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1TransactionsResponse>(),
            TransactionsIndexError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a transaction
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TransactionResource2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TransactionsShowError"/> when the server returns an error response.</exception>
    public Task<TransactionResource2> TransactionsShow(TransactionsShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/transactions/{transaction}"),
            [new TemplateParam("transaction", request.Transaction)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TransactionResource2>(),
            TransactionsShowError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a transaction
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TransactionResource2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TransactionsStoreError"/> when the server returns an error response.</exception>
    public Task<TransactionResource2> TransactionsStore(TransactionsStoreRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/transactions"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TransactionResource2>(),
            TransactionsStoreError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a transaction
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TransactionResource2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TransactionsUpdateError"/> when the server returns an error response.</exception>
    public Task<TransactionResource2> TransactionsUpdate(TransactionsUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/transactions/{transaction}"),
            [new TemplateParam("transaction", request.Transaction)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TransactionResource2>(),
            TransactionsUpdateError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);
}
