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
using Basiq.Requests.IncomeApi;

namespace Basiq.Api;

public sealed class IncomeApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal IncomeApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve an income summary
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IncomeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetIncomeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve an existing income summary for a specific user
    /// </remarks>
    public Task<IncomeResponse> GetIncome(GetIncomeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/income/{snapshotId}"),
            [new TemplateParam("userId", request.UserId), new TemplateParam("snapshotId", request.SnapshotId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IncomeResponse>(),
            GetIncomeError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create an income summary
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IncomeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostIncomeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an income summary for a specific user
    /// </remarks>
    public Task<IncomeResponse> PostIncome(PostIncomeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/income"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IncomeResponse>(),
            PostIncomeError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);
}
