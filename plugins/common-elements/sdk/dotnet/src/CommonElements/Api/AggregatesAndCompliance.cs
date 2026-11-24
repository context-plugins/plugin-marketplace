using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CommonElements.Core;
using CommonElements.Core.Exceptions;
using CommonElements.Core.Models;
using CommonElements.Core.Request;
using CommonElements.Core.Response;
using CommonElements.Errors;
using CommonElements.Models;
using CommonElements.Requests.AggregatesAndCompliance;

namespace CommonElements.Api;

public sealed class AggregatesAndCompliance
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AggregatesAndCompliance(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Submit a community association document for automated compliance analysis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ComplianceScanResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ComplianceScanError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submit a community association document for automated compliance analysis. Returns a structured assessment against Florida and multi-state statutory requirements, plus best-practice governance rules.
    /// </remarks>
    public Task<ApiV1ComplianceScanResponse> ComplianceScan(ComplianceScanRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/compliance/scan"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ComplianceScanResponse>(),
            ComplianceScanError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Per-state rollup of the dataset: association counts broken out by subtype, plus…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1GeoStateSummaryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GeoStateSummaryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Per-state rollup of the dataset: association counts broken out by subtype, plus insurance licensee counts. The market-sizing call: how much of a state the data covers before you build against it.
    /// <para>
    /// <b>Plan:</b> Available on every plan, uncapped: this returns one row per state, not a row listing.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>Aggregate counts only. No per-association rows, no personal data. Counts move as ingestion runs, so treat them as current rather than fixed.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1GeoStateSummaryResponse> GeoStateSummary(GeoStateSummaryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/geo/state-summary"),
            [],
            [new Param("state", request.State)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1GeoStateSummaryResponse>(),
            GeoStateSummaryError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
