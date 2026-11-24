using System;
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
using Basiq.Requests.Expenses;

namespace Basiq.Api;

public sealed class Expenses
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Expenses(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve an expense summary
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExpensesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetExpensesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve an existing expense summary for a specific user
    /// </remarks>
    public Task<ExpensesResponse> GetExpenses(GetExpensesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/expenses/{snapshotId}"),
            [new TemplateParam("userId", request.UserId), new TemplateParam("snapshotId", request.SnapshotId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ExpensesResponse>(),
            GetExpensesError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create an expense summary
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExpensesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostExpensesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new expense summary for a user
    /// </remarks>
    public Task<ExpensesResponse> PostExpenses(PostExpensesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/expenses"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ExpensesResponse>(),
            PostExpensesError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);
}
