using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using PlinthUsGrantsData.Core;
using PlinthUsGrantsData.Core.Authentication;
using PlinthUsGrantsData.Core.ErrorResponse;
using PlinthUsGrantsData.Core.Exceptions;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Core.Request;
using PlinthUsGrantsData.Core.Response;
using PlinthUsGrantsData.Errors;
using PlinthUsGrantsData.Models;
using PlinthUsGrantsData.Requests.Batch;

namespace PlinthUsGrantsData.Api;

public sealed class Batch
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Batch(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Look up one field for each of up to 500 organizations in one call
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BatchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BatchLookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The spreadsheet endpoint. Each row names an organization (an EIN, or a name to resolve) and ONE field from the published vocabulary (<c>GET /api/v1/batch/fields</c>); the values come back in the same order, each with a status that says whether it is an answer, an unresolved name, a field the key's plan does not reach, or an error. Costs one call per 50 rows rather than one per row, charged against the same allowance as every other endpoint. Rows the request cannot pay for are refused as a whole before any work is done, with the number of rows the balance does cover.
    /// </remarks>
    public Task<BatchResponse> BatchLookup(BatchLookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/batch"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BatchResponse>(),
            BatchLookupError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The field vocabulary POST /batch answers, with the plan each needs
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Keyless. The same list the Sheets and Excel functions offer as autocomplete, read from one configuration file so the client and the server cannot disagree about a field.
    /// </remarks>
    public Task<object> ListBatchFields(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/batch/fields"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
