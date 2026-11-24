using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Paid.Core;
using Paid.Core.Authentication;
using Paid.Core.Exceptions;
using Paid.Core.Extensions;
using Paid.Core.Models;
using Paid.Core.Request;
using Paid.Core.Response;
using Paid.Errors;
using Paid.Models;
using Paid.Requests.AnalyticsExperimental;

namespace Paid.Api;

public sealed class AnalyticsExperimental
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal AnalyticsExperimental(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Execute a SQL query against your analytics data (experimental)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnalyticsQueryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ExecuteAnalyticsQueryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// ⚠️ <b>Experimental</b> — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.
    /// <para>
    /// Runs a single ClickHouse SELECT (or WITH … SELECT) against your organization's analytics views. Before writing a query, call <c>getAnalyticsSchema</c> (GET /schema) for the available views and columns, and <c>getSignalsMetadata</c> (GET /signals/metadata) for the JSON paths inside <c>fact_signal.data</c>. Results are automatically scoped to your organization — no org filter is needed or possible. Only SELECT/WITH statements are accepted.
    /// </para>
    /// <para>
    /// Conventions: monetary amounts are minor units (cents — divide by 100 for the major unit); most are integers, but <c>fact_cost.cost_amount</c> is fractional cents (Decimal) since a single AI call usually costs less than a cent; 64-bit integers (counts, ids, amounts) are returned as JSON strings to preserve precision, so parse them client-side. Query signal payloads via JSON paths, e.g. <c>SELECT data.country::String AS country, count() FROM fact_signal GROUP BY country</c>.
    /// </para>
    /// <para>
    /// Limits: 30 seconds of execution time and 10,000 result rows (truncation is flagged via <c>meta.truncated</c>). Prefer aggregates and a <c>created_at</c> date filter on large tables — this endpoint is for interactive analytics, not bulk export.
    /// </para>
    /// </remarks>
    public Task<AnalyticsQueryResponse> ExecuteAnalyticsQuery(ExecuteAnalyticsQueryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/experimental/analytics/query"),
            [],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AnalyticsQueryResponse>(),
            ExecuteAnalyticsQueryError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List queryable analytics views, columns, and types (experimental)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnalyticsSchemaResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAnalyticsSchemaError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// ⚠️ <b>Experimental</b> — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.
    /// <para>
    /// Returns the analytics views available to POST /query, with column names, ClickHouse types, and descriptions. Dimensions (<c>dim_*</c>) describe entities; facts (<c>fact_*</c>) are event/transaction tables that join to dimensions via the <c>*_id</c> columns described in each comment.
    /// </para>
    /// </remarks>
    public Task<AnalyticsSchemaResponse> GetAnalyticsSchema(GetAnalyticsSchemaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/experimental/analytics/schema"),
            [],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnalyticsSchemaResponse>(),
            GetAnalyticsSchemaError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Discover metadata keys present in your signals (experimental)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SignalsMetadataResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSignalsMetadataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// ⚠️ <b>Experimental</b> — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.
    /// <para>
    /// Lists the JSON paths (and their observed types) present in the <c>data</c> payload of your signals within a time window (default: last 30 days), grouped by signal name. Use the returned paths in queries against <c>fact_signal</c>, e.g. <c>WHERE data.::String = '...'</c>.
    /// </para>
    /// </remarks>
    public Task<SignalsMetadataResponse> GetSignalsMetadata(GetSignalsMetadataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/experimental/analytics/signals/metadata"),
            [],
            [
                new Param("signalName", request.SignalName),
                new Param("fromDate", request.FromDate?.ToIso8601()),
                new Param("toDate", request.ToDate?.ToIso8601()),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SignalsMetadataResponse>(),
            GetSignalsMetadataError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
