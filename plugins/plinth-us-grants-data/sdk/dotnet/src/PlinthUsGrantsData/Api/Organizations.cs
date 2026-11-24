using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using PlinthUsGrantsData.Core;
using PlinthUsGrantsData.Core.Authentication;
using PlinthUsGrantsData.Core.Exceptions;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Core.Request;
using PlinthUsGrantsData.Core.Response;
using PlinthUsGrantsData.Errors;
using PlinthUsGrantsData.Models;
using PlinthUsGrantsData.Requests.Organizations;

namespace PlinthUsGrantsData.Api;

/// <summary>
/// Per-organization profiles, financials and IRS compliance facets.
/// </summary>
public sealed class Organizations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Organizations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Core profile for one organization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EssentialsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1EssentialsByEinError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Name, location, NTEE classification and a financials summary from the latest filing we have parsed.
    /// </remarks>
    public Task<EssentialsResponse> GetApiV1EssentialsByEin(GetApiV1EssentialsByEinRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/essentials/{ein}"),
            [new TemplateParam("ein", request.Ein)],
            [new Param("format", request.Format), new Param("example", request.Example)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EssentialsResponse>(),
            GetApiV1EssentialsByEinError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Full profile for one organization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PremierResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1PremierByEinError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Everything in essentials plus full financials and the resolved geographic service footprint.
    /// </remarks>
    public Task<PremierResponse> GetApiV1PremierByEin(GetApiV1PremierByEinRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/premier/{ein}"),
            [new TemplateParam("ein", request.Ein)],
            [new Param("format", request.Format), new Param("example", request.Example)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PremierResponse>(),
            GetApiV1PremierByEinError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// IRS status and sanctions screen for one organization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ComplianceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1ScreeningByEinError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Exemption subsection, deductibility, foundation type, NTEE and IRS auto-revocation status, plus name screens against the OFAC sanctions lists (SDN and Consolidated, primary and alias names), the Internal Revenue Bulletin's §170 deletion announcements, and California registration (AG Registry + FTB). Every screen reports whether it RAN: a source that is unavailable comes back <c>not screened</c>, never <c>clear</c>.
    /// <para>
    /// <c>compliance.reliance</c> carries the Rev. Proc. 2018-32 §8.01 elements — the checklist the IRS publishes for relying on EO BMF data from a third party — element by element, with the EO BMF Extract revision date and whether it is the current one. <c>?format=pdf</c> returns the same screen as a one-page retainable report for the grant file (paid keys; §8.01(2) puts the retention obligation on the grantor).
    /// </para>
    /// <para>
    /// The name screens are triage signals, not determinations.
    /// </para>
    /// </remarks>
    public Task<ComplianceResponse> GetApiV1ScreeningByEin(GetApiV1ScreeningByEinRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/screening/{ein}"),
            [new TemplateParam("ein", request.Ein)],
            [
                new Param("format", request.Format),
                new Param("compat", request.Compat),
                new Param("example", request.Example),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ComplianceResponse>(),
            GetApiV1ScreeningByEinError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// IRS status and sanctions screen for one organization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetComplianceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Exemption subsection, deductibility, foundation type, NTEE, IRS auto-revocation status and an OFAC (Treasury SDN) name screen. Refreshed monthly, so fresher than the 990 financials. The OFAC field is a triage signal — an entity NAME screen, not a sanctions determination.
    /// </remarks>
    public Task<object> GetCompliance(GetComplianceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/compliance/{ein}"),
            [new TemplateParam("ein", request.Ein)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetComplianceError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Screen up to 100 organizations in one call
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkComplianceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetComplianceBulkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The bulk form of <c>/screening/{ein}</c>, running byte-identical logic per EIN — a bulk screen that disagreed with the single-EIN screen would be worse than none. Candid's bulk Charity Check takes 25 organizations; this takes 100. Costs ONE call from your monthly allowance, not one per EIN. <c>report_date</c> and <c>sources</c> are returned once for the batch, since every row is screened against the same reference files.
    /// </remarks>
    public Task<BulkComplianceResponse> GetComplianceBulk(GetComplianceBulkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/screening/bulk"),
            [],
            [new Param("compat", request.Compat)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BulkComplianceResponse>(),
            GetComplianceBulkError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Core profile for one organization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEssentialsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Name, location, NTEE classification and a financials summary from the latest filing we have parsed.
    /// </remarks>
    public Task<object> GetEssentials(GetEssentialsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/essentials/{ein}"),
            [new TemplateParam("ein", request.Ein)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetEssentialsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Federal and state government funding an organization receives
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GovFundingResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGovFundingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Award-level federal obligations (USASpending) and state checkbook payments for one EIN, with agency and state rollups computed over every matching row. Pro plan. Obligations are money committed, not paid; state coverage is nine checkbooks, not national.
    /// </remarks>
    public Task<GovFundingResponse> GetGovFunding(GetGovFundingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/gov-funding/{ein}"),
            [new TemplateParam("ein", request.Ein)],
            [
                new Param("format", request.Format),
                new Param("fiscal_year", request.FiscalYear),
                new Param("kind", request.Kind),
                new Param("state", request.State),
                new Param("limit", request.Limit),
                new Param("example", request.Example),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GovFundingResponse>(),
            GetGovFundingError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Full profile for one organization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPremierError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Everything in essentials plus full financials and the resolved geographic service footprint.
    /// </remarks>
    public Task<object> GetPremier(GetPremierRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/premier/{ein}"),
            [new TemplateParam("ein", request.Ein)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetPremierError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search organizations (Candid Essentials-shaped)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EssentialsSearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchEssentialsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Nonprofit SEARCH, in the POST-with-a-body shape a Candid Essentials v4 client already builds: <c>search_terms</c>, <c>from</c>, <c>size</c>, <c>filters</c>, <c>sort</c>. This is the endpoint that corresponds to Candid's <c>/essentials/v4</c> — <c>GET /api/essentials/{ein}</c> is the single-record lookup, and mapping a search API onto it is the migration mistake worth avoiding.
    /// <para>
    /// Use <c>jurisdiction=ca</c> for Canadian organizations; the default is <c>us</c>. Financial filters use the filing currency, identified in <c>x_plinth.dataset</c>; currencies are never combined. Filters cover geography, IRS classification and financial ranges, all read from the organization's own filing. Candid's PCS subject, profile-participation and demographic filters have no counterpart; send one and it comes back named in <c>x_plinth.warnings</c> rather than being dropped.
    /// </para>
    /// </remarks>
    public Task<EssentialsSearchResponse> SearchEssentials(SearchEssentialsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/essentials"),
            [],
            [new Param("jurisdiction", request.Jurisdiction)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EssentialsSearchResponse>(),
            SearchEssentialsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Check a retained report against its signature
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VerifyComplianceReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Recomputes the identifier and checks the signature over a compliance report you kept. <b>Keyless and unmetered</b> — a grantor confirming a filed document should not spend a screen doing it, and their auditor should not need a credential at all.
    /// <para>
    /// Reports also state <c>report_format</c>, which versions what the document ASSERTS: which limitations apply, which section governs a conflict, what the summary concludes. An older format is not wrong, but today's may describe the same organization differently, and the response says which you are holding.
    /// </para>
    /// <para>
    /// Offline verification is equivalent and needs nothing from us: the Ed25519 public key is published on <c>/meta</c>. Note this is a detached signature over the report data, not an X.509/PAdES PDF signature — a PDF reader shows no signature panel.
    /// </para>
    /// </remarks>
    public Task<object> VerifyComplianceReport(VerifyComplianceReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/screening/verify"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            VerifyComplianceReportError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
