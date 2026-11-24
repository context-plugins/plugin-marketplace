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
using Coresignal.Models;
using Coresignal.Requests.Collect;

namespace Coresignal.Api;

/// <summary>
/// Retrieve full company records by ID.
/// </summary>
public sealed class Collect
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Collect(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Bulk Collect Companies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Company"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve multiple full company records by an array of IDs.
    /// </remarks>
    public Task<IReadOnlyList<Company>> BulkCollectCompanies(BulkCollectCompaniesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bulk_collect"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<Company>>(),
            RawErrorResponse.Instance,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Collect a Company record
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Company"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CollectCompanyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the full company record for the given ID.
    /// </remarks>
    public Task<Company> CollectCompany(CollectCompanyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/collect/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Company>(),
            CollectCompanyError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
