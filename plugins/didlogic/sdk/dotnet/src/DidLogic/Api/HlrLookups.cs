using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DidLogic.Core;
using DidLogic.Core.Exceptions;
using DidLogic.Core.Extensions;
using DidLogic.Core.Models;
using DidLogic.Core.Request;
using DidLogic.Core.Response;
using DidLogic.Errors;
using DidLogic.Models;
using DidLogic.Requests.HlrLookups;

namespace DidLogic.Api;

public sealed class HlrLookups
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal HlrLookups(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create HLR lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2HlrResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HlrCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submits phone numbers for an HLR (Home Location Register) lookup
    /// (maximum 1500 numbers per request).
    /// <para>
    /// Numbers must be supplied in <b>E.164 format</b> (e.g. <c>+14155552671</c>); a leading <c>+</c>
    /// is added automatically when omitted.
    /// </para>
    /// <para>
    /// A single number resolves synchronously; larger batches are processed asynchronously — poll
    /// hlr_history for results. Lookups are performed
    /// independently of call setup and do not affect PDD. Results are not cached: each request
    /// re-queries the provider.
    /// </para>
    /// <para>
    /// <c>hlr_request.task_id</c> feeds hlr_history (<c>task_ids</c>).
    /// </para>
    /// </remarks>
    public Task<ApiV2HlrResponse> HlrCreate(HlrCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/hlr"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV2HlrResponse>(),
            HlrCreateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List HLR lookup history
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2HlrHistoryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HlrHistoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the caller's HLR lookup logs — one per number checked — with the lookup result
    /// (validity, carrier, MCC/MNC, phone type, ported and risky flags, country). Supports
    /// filtering by number prefix, status, and date ranges, plus pagination.
    /// </remarks>
    public Task<ApiV2HlrHistoryResponse> HlrHistory(HlrHistoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/hlr/history"),
            [],
            [
                new Param("ids", request.Ids),
                new Param("task_ids", request.TaskIds),
                new Param("number", request.Number),
                new Param("number_start", request.NumberStart),
                new Param("status", request.Status),
                new Param("created_at_from", request.CreatedAtFrom?.ToDate()),
                new Param("created_at_to", request.CreatedAtTo?.ToDate()),
                new Param("processed_at_from", request.ProcessedAtFrom?.ToDate()),
                new Param("processed_at_to", request.ProcessedAtTo?.ToDate()),
                new Param("order_by", request.OrderBy),
                new Param("order", request.Order),
                new Param("page", request.Page),
                new Param("per_page", request.PerPage),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2HlrHistoryResponse>(),
            HlrHistoryError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
