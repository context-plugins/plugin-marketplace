using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Ortto.Core;
using Ortto.Core.Exceptions;
using Ortto.Core.Models;
using Ortto.Core.Request;
using Ortto.Core.Response;
using Ortto.Errors;
using Ortto.Models;
using Ortto.Requests.People;

namespace Ortto.Api;

/// <summary>
/// Create, update, retrieve, and manage people (contacts).
/// </summary>
public sealed class People
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal People(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete one or more people
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeletePeopleError"/> when the server returns an error response.</exception>
    public Task DeletePeople(DeletePeopleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/person/delete"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            DeletePeopleError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve one or more people (get)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PersonGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPeopleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves people matching a filter, with the requested fields, sort order, limit, and offset for pagination.
    /// </remarks>
    public Task<PersonGetResponse> GetPeople(GetPeopleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/person/get"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PersonGetResponse>(),
            GetPeopleError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve people by their Ortto IDs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PersonGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPeopleByIdsError"/> when the server returns an error response.</exception>
    public Task<PersonGetResponse> GetPeopleByIds(GetPeopleByIdsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/person/get-by-ids"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PersonGetResponse>(),
            GetPeopleByIdsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create or update one or more people (merge)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PersonMergeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MergePeopleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates or updates up to 100 people in a single request. Matching of existing records is controlled with merge_by, merge_strategy, and find_strategy.
    /// </remarks>
    public Task<PersonMergeResponse> MergePeople(MergePeopleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/person/merge"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PersonMergeResponse>(),
            MergePeopleError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
