using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Coresignal.Core;
using Coresignal.Core.ErrorResponse;
using Coresignal.Core.Exceptions;
using Coresignal.Core.Models;
using Coresignal.Core.Request;
using Coresignal.Core.Response;
using Coresignal.Errors;
using Coresignal.Requests.Search;

namespace Coresignal.Api;

/// <summary>
/// Search and filter company records.
/// </summary>
public sealed class Search
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Search(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Search Companies (Elasticsearch DSL)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="long"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search company records using a full Elasticsearch DSL query body.
    /// </remarks>
    public Task<IReadOnlyList<long>> SearchCompaniesByEsDsl(SearchCompaniesByEsDslRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/search/es_dsl"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<long>>(),
            RawErrorResponse.Instance,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Companies (filter)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="long"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchCompaniesByFilterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search company records using a structured filter object. Returns matching record IDs.
    /// </remarks>
    public Task<IReadOnlyList<long>> SearchCompaniesByFilter(SearchCompaniesByFilterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/search/filter"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<long>>(),
            SearchCompaniesByFilterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
