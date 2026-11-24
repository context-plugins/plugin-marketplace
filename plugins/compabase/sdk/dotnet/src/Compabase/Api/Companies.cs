using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Compabase.Core;
using Compabase.Core.Authentication;
using Compabase.Core.Exceptions;
using Compabase.Core.Extensions;
using Compabase.Core.Models;
using Compabase.Core.Request;
using Compabase.Core.Response;
using Compabase.Errors;
using Compabase.Models;
using Compabase.Requests.Companies;

namespace Compabase.Api;

public sealed class Companies
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Companies(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// CEIDG profile by NIP
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCeidgNipByNipError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sole-proprietor (CEIDG) profile by <b>NIP</b>. Subject to public CEIDG catalog
    /// visibility. Contact email/phone revealed for API-key auth when present and allowed.
    /// Personal owner fields follow the same RODO gating as the website.
    /// <para>
    /// Typical payload:
    /// - <c>company</c> – identifiers, address, PKD activities, contacts, logo, <c>roles</c> (owner)
    /// - <c>primaryPkdDescription</c> – localized primary PKD label
    /// - <c>companySummary</c> – AI description for the requested <c>locale</c> only (e.g. <c>{ "en": "…" }</c>)
    /// - <c>details.vat</c> – VAT whitelist status + bank accounts when known
    /// - <c>similarCompanies</c> – peer JDGs from the same enrichment cache
    /// - <c>changeHistory</c> – CEIDG change events when available
    /// - <c>sudop</c> – public-aid (SUDOP) snapshot when checked (<c>null</c> if unavailable)
    /// - <c>bzp</c> – public-procurement (BZP) summary when present (<c>null</c> if none)
    /// - <c>ure</c> – URE energy concessions when checked (<c>null</c> if unavailable)
    /// - <c>bdo</c> – BDO waste/packaging register when present (<c>null</c> if none)
    /// - <c>gpw</c> – Warsaw Stock Exchange listing snapshot when the NIP is matched (<c>null</c> if not listed)
    /// </para>
    /// </remarks>
    public Task<object> GetCeidgNipByNip(GetCeidgNipByNipRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ceidg/nip/{nip}"),
            [new TemplateParam("nip", request.Nip)],
            [new Param("locale", request.Locale)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetCeidgNipByNipError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search and list companies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompanyListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Uses the same search dataset as the public site. Filters combine with <b>AND</b> where applicable.
    /// <para>
    /// <b>Response:</b> <c>data</c> is one page of rows; <c>pagination</c> has <c>limit</c>, <c>offset</c>, <c>total</c>, <c>hasMore</c>, and optionally <c>cursor</c> when cursor-based paging is used.
    /// </para>
    /// <para>
    /// For a single company’s full profile, use <c>GET /companies/krs/{krs}</c> (KRS court number).
    /// </para>
    /// <para>
    /// Parameter details are documented on each query field below.
    /// </para>
    /// <para>
    /// <b>Pagination mode</b>
    /// </para>
    /// <para>
    /// <c>offset</c> and <c>cursor</c> are mutually exclusive in client usage. If both are sent, the server returns <c>400 CONFLICTING_PARAMETERS</c>.
    /// </para>
    /// <para>
    /// Use <c>offset</c> for shallow interactive browsing and <c>cursor</c> for deep paging/export flows.
    /// </para>
    /// <para>
    /// Cursor pagination is ordered by <c>entity_id</c> ascending; <c>cursor</c> is the last <c>entity_id</c> from the prior page.
    /// </para>
    /// <para>
    /// Because datasets can change between requests, deep paging may still observe occasional duplicates or skips.
    /// </para>
    /// <para>
    /// With cursor mode, <c>pagination.total</c> may be unavailable and returned as <c>-1</c>; rely on <c>hasMore</c>.
    /// </para>
    /// <para>
    /// <b>Default ordering (offset mode)</b>
    /// </para>
    /// <list type="bullet">
    ///   <item><description>without <c>q</c>: <c>has_email</c> desc, then <c>has_website</c> desc, then <c>revenue_total</c> desc, then <c>extracted_at</c> desc, then <c>entity_id</c> asc.</description></item>
    ///   <item><description>with <c>q</c>: same ordering as above (not TF-IDF/full-text relevance ranking).</description></item>
    ///   <item><description>offset pagination is intended for interactive browsing; for deterministic deep traversal use cursor mode.</description></item>
    /// </list>
    /// <para>
    /// <b>Financial filter semantics</b> (for <c>/companies</c> and <c>/companies/count</c>)
    /// </para>
    /// <list type="bullet">
    ///   <item><description>financial range filters are evaluated on the latest indexed financial snapshot per company (search index row).</description></item>
    ///   <item><description>companies with <c>null</c> value for a filtered metric do not match that metric filter.</description></item>
    ///   <item><description>when <c>last_report_year_*</c> is combined with financial metric filters, both are evaluated against the same indexed reporting snapshot.</description></item>
    /// </list>
    /// </remarks>
    public Task<CompanyListResponse> GetCompanies(GetCompaniesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies"),
            [],
            [
                new Param("q", request.Q),
                new Param("keywords", request.Keywords),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("cursor", request.Cursor),
                new Param("pkd", request.Pkd),
                new Param("primary_only", request.PrimaryOnly),
                new Param("currency", request.Currency),
                new Param("voivodeship", request.Voivodeship),
                new Param("postal_code", request.PostalCode),
                new Param("city", request.City),
                new Param("revenue_min", request.RevenueMin),
                new Param("revenue_max", request.RevenueMax),
                new Param("revenue_operating_min", request.RevenueOperatingMin),
                new Param("revenue_operating_max", request.RevenueOperatingMax),
                new Param("profit_operating_min", request.ProfitOperatingMin),
                new Param("profit_operating_max", request.ProfitOperatingMax),
                new Param("profit_net_min", request.ProfitNetMin),
                new Param("profit_net_max", request.ProfitNetMax),
                new Param("income_tax_min", request.IncomeTaxMin),
                new Param("income_tax_max", request.IncomeTaxMax),
                new Param("cost_wages_min", request.CostWagesMin),
                new Param("cost_wages_max", request.CostWagesMax),
                new Param("cost_amortization_min", request.CostAmortizationMin),
                new Param("cost_amortization_max", request.CostAmortizationMax),
                new Param("total_assets_min", request.TotalAssetsMin),
                new Param("total_assets_max", request.TotalAssetsMax),
                new Param("ebitda_min", request.EbitdaMin),
                new Param("ebitda_max", request.EbitdaMax),
                new Param("capital_min", request.CapitalMin),
                new Param("capital_max", request.CapitalMax),
                new Param("estimated_value_min", request.EstimatedValueMin),
                new Param("estimated_value_max", request.EstimatedValueMax),
                new Param("registration_year_min", request.RegistrationYearMin),
                new Param("registration_year_max", request.RegistrationYearMax),
                new Param("registration_date_min", request.RegistrationDateMin?.ToDate()),
                new Param("registration_date_max", request.RegistrationDateMax?.ToDate()),
                new Param("last_report_year_min", request.LastReportYearMin),
                new Param("last_report_year_max", request.LastReportYearMax),
                new Param("status_active", request.StatusActive),
                new Param("legal_form", request.LegalForm),
                new Param("has_email", request.HasEmail),
                new Param("has_website", request.HasWebsite),
                new Param("sort", request.Sort),
                new Param("dir", request.Dir),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompanyListResponse>(),
            GetCompaniesError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Count companies for current filters
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompanyCountResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesCountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns how many companies match the same <b>filter set</b> as <c>GET /companies</c>, without returning rows.
    /// Use the <b>same query parameters</b> as list/search (except pagination: no <c>limit</c>, <c>offset</c>, or <c>cursor</c>).
    /// Filters combine with <b>AND</b> where applicable.
    /// <para>
    /// <b>Response:</b> a single integer <c>count</c>; total matching companies for the current filters.
    /// </para>
    /// </remarks>
    public Task<CompanyCountResponse> GetCompaniesCount(GetCompaniesCountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/count"),
            [],
            [
                new Param("q", request.Q),
                new Param("keywords", request.Keywords),
                new Param("pkd", request.Pkd),
                new Param("primary_only", request.PrimaryOnly),
                new Param("currency", request.Currency),
                new Param("voivodeship", request.Voivodeship),
                new Param("postal_code", request.PostalCode),
                new Param("city", request.City),
                new Param("revenue_min", request.RevenueMin),
                new Param("revenue_max", request.RevenueMax),
                new Param("revenue_operating_min", request.RevenueOperatingMin),
                new Param("revenue_operating_max", request.RevenueOperatingMax),
                new Param("profit_operating_min", request.ProfitOperatingMin),
                new Param("profit_operating_max", request.ProfitOperatingMax),
                new Param("profit_net_min", request.ProfitNetMin),
                new Param("profit_net_max", request.ProfitNetMax),
                new Param("income_tax_min", request.IncomeTaxMin),
                new Param("income_tax_max", request.IncomeTaxMax),
                new Param("cost_wages_min", request.CostWagesMin),
                new Param("cost_wages_max", request.CostWagesMax),
                new Param("cost_amortization_min", request.CostAmortizationMin),
                new Param("cost_amortization_max", request.CostAmortizationMax),
                new Param("total_assets_min", request.TotalAssetsMin),
                new Param("total_assets_max", request.TotalAssetsMax),
                new Param("ebitda_min", request.EbitdaMin),
                new Param("ebitda_max", request.EbitdaMax),
                new Param("capital_min", request.CapitalMin),
                new Param("capital_max", request.CapitalMax),
                new Param("estimated_value_min", request.EstimatedValueMin),
                new Param("estimated_value_max", request.EstimatedValueMax),
                new Param("registration_year_min", request.RegistrationYearMin),
                new Param("registration_year_max", request.RegistrationYearMax),
                new Param("registration_date_min", request.RegistrationDateMin?.ToDate()),
                new Param("registration_date_max", request.RegistrationDateMax?.ToDate()),
                new Param("last_report_year_min", request.LastReportYearMin),
                new Param("last_report_year_max", request.LastReportYearMax),
                new Param("status_active", request.StatusActive),
                new Param("legal_form", request.LegalForm),
                new Param("has_email", request.HasEmail),
                new Param("has_website", request.HasWebsite),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompanyCountResponse>(),
            GetCompaniesCountError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Bulk company search export page
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompanyListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesExportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Same filters as <c>GET /companies</c>, with page size up to <b>500</b> (vs 100 on the
    /// standard list). Contact emails are included when available.
    /// For large pulls, page with <c>cursor</c> (<c>cursor</c> = last row <c>entity_id</c>). Large <c>offset</c> values get slow.
    /// Each page consumes <b>1</b> monthly quota request.
    /// </remarks>
    public Task<CompanyListResponse> GetCompaniesExport(GetCompaniesExportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/export"),
            [],
            [
                new Param("q", request.Q),
                new Param("keywords", request.Keywords),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("cursor", request.Cursor),
                new Param("pkd", request.Pkd),
                new Param("primary_only", request.PrimaryOnly),
                new Param("has_email", request.HasEmail),
                new Param("has_website", request.HasWebsite),
                new Param("status_active", request.StatusActive),
                new Param("revenue_min", request.RevenueMin),
                new Param("revenue_max", request.RevenueMax),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompanyListResponse>(),
            GetCompaniesExportError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Full company profile
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns full company profile addressed by <b>KRS</b> (Polish court registry number).
    /// Digits only; leading zeros are optional (normalized to 10 digits server-side).
    /// <para>
    /// Integrations that only have a KRS number can call this directly.
    /// One request typically covers enrichment for a company. The payload includes:
    /// - <c>company</c> (identifiers, address, PKD, logo, capital),
    /// - <c>details.contacts</c> (email, phone, website, deliverability flags; email/phone revealed for API keys),
    /// - <c>details.vat</c> (VAT whitelist status + bank accounts when known),
    /// - <c>details.filings</c> / attributes / operational status,
    /// - <c>roles</c> and <c>ownership</c>,
    /// - <c>financials.byYear</c> (metrics + <c>esf_statement_lines</c> when present; XML files are on the documents endpoint),
    /// - <c>krz</c> (restructuring/insolvency proceedings summary),
    /// - <c>sanctions</c> (MSWiA sanctions listing with measures and grounds; omitted when the company is not listed; dedicated read is <c>/companies/krs/{krs}/sanctions</c>),
    /// - <c>sudop</c> (public aid / de minimis when checked),
    /// - <c>bzp</c> (public procurement summary when present),
    /// - <c>ure</c> (URE energy concessions when checked),
    /// - <c>bdo</c> (BDO waste/packaging register when present),
    /// - <c>gpw</c> (Warsaw Stock Exchange listing snapshot when the NIP is matched — no full OHLCV; use <c>/companies/krs/{krs}/gpw</c>),
    /// - <c>crbr</c> (beneficial owners when present and RODO-eligible),
    /// - <c>changeHistory</c> when non-empty,
    /// - <c>similarCompanies</c>, <c>subsidiaryCompanies</c>, <c>pkdRankings</c>, <c>faq</c>, <c>insightsByYear</c>,
    /// - <c>hasStatistics</c> (boolean; full peer benchmarks via <c>/statistics</c>).
    /// </para>
    /// </remarks>
    public Task<object> GetCompaniesKrsByKrs(GetCompaniesKrsByKrsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}"),
            [new TemplateParam("krs", request.Krs)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetCompaniesKrsByKrsError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Company connections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsConnectionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Graph of related companies and people linked through shared roles/ownership
    /// (same payload as the profile Connections UI).
    /// </remarks>
    public Task<object> GetCompaniesKrsByKrsConnections(GetCompaniesKrsByKrsConnectionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/connections"),
            [new TemplateParam("krs", request.Krs)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetCompaniesKrsByKrsConnectionsError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Corporate group (GLEIF LEI register)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Corporate group of a Polish company from the global LEI register run by GLEIF, supplemented with foreign corporate
    /// shareholders from KRS matched to the LEI register: direct parent and ultimate parent (name, country, LEI),
    /// subsidiaries and other group companies (Polish ones with KRS number, foreign ones with country) and group size.
    /// <c>direct_parent.source = "krs"</c> means the parent comes from the KRS shareholder list (<c>pct</c> = stake). Refreshed daily.
    /// Same data as MCP <c>get_company_group</c>.
    /// </remarks>
    public Task<object> GetCompaniesKrsByKrsGroup(GetCompaniesKrsByKrsGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/group"),
            [new TemplateParam("krs", request.Krs)],
            [new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetCompaniesKrsByKrsGroupError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Legal status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Quick legal-status check (Active, Bankruptcy, Liquidation).
    /// </remarks>
    public Task<object> GetCompaniesKrsByKrsStatus(GetCompaniesKrsByKrsStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/status"),
            [new TemplateParam("krs", request.Krs)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetCompaniesKrsByKrsStatusError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Structure &amp; People
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsStructurePeopleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns ownership and management structure only (without profile or financial data):
    /// <c>roles</c> and <c>ownership</c>.
    /// </remarks>
    public Task<object> GetCompaniesKrsByKrsStructurePeople(GetCompaniesKrsByKrsStructurePeopleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/structure-people"),
            [new TemplateParam("krs", request.Krs)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetCompaniesKrsByKrsStructurePeopleError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
