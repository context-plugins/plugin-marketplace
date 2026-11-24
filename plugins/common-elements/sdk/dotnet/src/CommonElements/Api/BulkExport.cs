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
using CommonElements.Requests.BulkExport;

namespace CommonElements.Api;

/// <summary>
/// Stream a full dataset as CSV or JSON. Growth plan or higher.
/// </summary>
public sealed class BulkExport
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal BulkExport(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Stream a full dataset as CSV or JSON, one request against your monthly quota…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ExportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ExportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stream a full dataset as CSV or JSON, one request against your monthly quota regardless of row count. <c>resource</c> is one of associations, vendors, statutes, building-safety, or report-card. Each resource has its own filter parameters (narrow the export the same way you would narrow the matching list endpoint) and a public-safe column allowlist. report-card streams the per-association public-record signal set behind the Explorer — FEMA NRI county risk, SIRS on file, HUD FHA status, elevator certificates, latest pool inspection, 24-month building permits, and IRS Form 990 revenue — keyed by organization id, name, state, and county.
    /// <para>
    /// <b>Plan:</b> Growth plan or higher. Free and Builder keys receive 403 tier_not_allowed — the per-row endpoints above are included in every plan, but streaming a full dataset is a Growth+ capability. Per-tier row cap on a single export: Growth 50,000 · Scale 250,000 · Enterprise 1,000,000.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>One export = one request against your monthly quota, whatever the row count, up to your plan's row cap.</description></item>
    ///   <item><description>The scope required depends on the resource, not the export capability itself — a key needs both the resource's read scope AND a Growth+ tier.</description></item>
    ///   <item><description>A source guard enforces the same public-record exclusions as every other v1 endpoint; a "columns" value that would expose an excluded field 400s rather than silently dropping it.</description></item>
    ///   <item><description>The first page is validated before the response starts streaming, so a bad filter or column name returns a clean JSON error. A failure mid-stream truncates the file — check row counts on large exports.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1ExportResponse> Export(ExportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/export/{resource}"),
            [new TemplateParam("resource", request.Resource)],
            [
                new Param("format", request.Format),
                new Param("columns", request.Columns),
                new Param("state", request.State),
                new Param("q", request.Q),
                new Param("county", request.County),
                new Param("subtype", request.Subtype),
                new Param("category", request.Category),
                new Param("unit_min / unit_max", request.UnitMinUnitMax),
                new Param("year_min / year_max", request.YearMinYearMax),
                new Param("is_claimed", request.IsClaimed),
                new Param("mgmt", request.Mgmt),
                new Param("chapter / topic", request.ChapterTopic),
                new Param("sirs_on_file / elevator_delinquent", request.SirsOnFileElevatorDelinquent),
                new Param("milestone_status / pool_last_result", request.MilestoneStatusPoolLastResult),
                new Param("has_sirs / has_elevator_cert", request.HasSirsHasElevatorCert),
                new Param("fha_status", request.FhaStatus),
                new Param("min_risk / max_risk", request.MinRiskMaxRisk),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ExportResponse>(),
            ExportError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stream the change feed as CSV or JSON: one row per observed event, with the…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ExportChangesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ExportChangesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stream the change feed as CSV or JSON: one row per observed event, with the event date, the association it happened to (id, name, state, county), the event type, the changed field, and person-free old/new value summaries. The bulk form of /api/v1/changes for loading trigger events into a warehouse or CRM instead of polling pages.
    /// <para>
    /// <b>Plan:</b> Growth plan or higher, same as every bulk export, with the same per-tier row caps (Growth 50,000 · Scale 250,000 · Enterprise 1,000,000). Your plan lookback window from the change feed still applies: the exported date range is clamped exactly as /api/v1/changes clamps it.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>No officer names, ever. The export reads the same person-stripped view as /api/v1/changes: officer changes come back as seat counts and canonical titles, and management changes (none detected yet) as firm names. There is no parameter that widens this.</description></item>
    ///   <item><description>The lookback window is your plan's change-feed window, applied server-side. The row cap is the bulk-export cap for your tier, not the per-request /api/v1/changes cap.</description></item>
    ///   <item><description>One export = one request against your monthly quota, whatever the row count.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1ExportChangesResponse> ExportChanges(ExportChangesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/export/changes"),
            [],
            [
                new Param("format", request.Format),
                new Param("columns", request.Columns),
                new Param("kind", request.Kind),
                new Param("state", request.State),
                new Param("county", request.County),
                new Param("subtype", request.Subtype),
                new Param("since", request.Since),
                new Param("until", request.Until),
                new Param("min_magnitude", request.MinMagnitude),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ExportChangesResponse>(),
            ExportChangesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
