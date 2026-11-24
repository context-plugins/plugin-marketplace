using System;
using Compabase.Core.Validation.Attributes;
using Compabase.Models.Enums;

namespace Compabase.Requests.Companies;

/// <summary>
/// The inputs of the GetCompanies operation.
/// </summary>
public sealed record GetCompaniesRequest
{
    /// <summary>
    /// Free-text search (company name and identifiers). <b>Digits</b> are treated as a possible KRS/NIP/REGON
    /// lookup. Whitespace is trimmed.
    /// Matching strategy: - identifier-like numeric input: identifier lookup path is used first. For 10-digit numeric values, exact match is attempted against KRS (<c>registry_number</c>) and NIP; an exact match is also attempted against REGON as stored in the index. For other numeric lengths, prefix matching is used for those identifier fields. - textual input: case-insensitive substring match on company name (<c>ILIKE %q%</c>).
    /// Numeric lookup has priority over text-name matching when <c>q</c> contains only digits. Example: <c>q=0000028860</c> is treated as identifier lookup (not generic relevance search).
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Keyword filter with <b>OR</b> semantics. Pass a comma-separated list, or repeat the parameter.
    /// Each keyword must be at least <b>2</b> characters after trimming. Empty tokens are ignored. Duplicate tokens may appear and are not guaranteed to be deduplicated server-side. Mixing repeated params and CSV is supported (e.g. <c>keywords=a,b&amp;keywords=c</c>).
    /// </summary>
    public string? Keywords { get; init; }

    /// <summary>
    /// Page size. <b>Default:</b> <c>20</c>. <c>GET /companies</c> caps at <b>100</b> per request.
    /// For bulk pulls use <c>GET /companies/export</c> (or <c>limit</c> &amp;gt; 100 on <c>/companies</c> via API key), capped at <b>500</b> per page. For deep traversal, page with <c>cursor</c>.
    /// <b>Quota accounting:</b> monthly quota counts each HTTP request. Row count in the page does not change the cost. Example: <c>limit=500</c> still consumes <b>1</b> request from monthly quota.
    /// </summary>
    [Minimum(1)]
    [Maximum(500)]
    public int Limit { get; init; } = 20;

    /// <summary>
    /// Zero-based row offset for classic <b>offset</b> pagination.
    /// Client contract: use either <c>offset</c> or <c>cursor</c> (not both). If both are provided, the server returns <c>400 CONFLICTING_PARAMETERS</c>.
    /// </summary>
    [Minimum(0)]
    public int Offset { get; init; } = 0;

    /// <summary>
    /// Optional <b>cursor</b> for pagination: <c>entity_id</c> of the last row from the previous page.
    /// Cursor paging is ordered by <c>entity_id</c> ascending. Use it for deep paging/export-style traversal. Do not combine with <c>offset</c>; if both are sent, request fails with <c>400 CONFLICTING_PARAMETERS</c>.
    /// When present, the server may return <c>pagination.total: -1</c> and include <c>pagination.cursor</c> for the next page.
    /// </summary>
    public Guid? Cursor { get; init; }

    /// <summary>
    /// PKD code (Polish business activity classification). <b>Case-insensitive</b>; trimmed and uppercased server-side.
    /// By default only the <b>primary</b> PKD (<c>primary_only=true</c>) is matched; set <c>primary_only=false</c> to match any code in <c>all_pkd_codes</c>.
    /// </summary>
    public string? Pkd { get; init; }

    /// <summary>
    /// Boolean filter syntax is accepted (<c>true</c>/<c>false</c>).
    /// Semantics: <c>true</c> (default) means <c>pkd</c> matches <c>primary_pkd</c> only. <c>false</c> means <c>pkd</c> can match any entry in <c>all_pkd_codes</c>.
    /// </summary>
    public bool PrimaryOnly { get; init; } = true;

    /// <summary>
    /// Display/filter currency context for financial threshold filters.
    /// Allowed values: <c>PLN</c>, <c>USD</c>, <c>EUR</c> (case-insensitive). Default is <c>PLN</c>.
    /// For <c>revenue_min</c> / <c>revenue_max</c>, the API applies thresholds against: - <c>revenue_total</c> when <c>currency=PLN</c> - <c>revenue_total_usd</c> when <c>currency=USD</c> - <c>revenue_total_eur</c> when <c>currency=EUR</c>
    /// </summary>
    public Currency Currency { get; init; } = Currency.Pln;

    /// <summary>
    /// Voivodeship / region filter. Compared to <c>company_search.region</c> <b>case-insensitively</b> (lowercased on the server).
    /// Use the same spelling as stored in data (e.g. Polish voivodeship names such as <c>mazowieckie</c>, <c>śląskie</c>). Common values include: <c>dolnośląskie</c>, <c>małopolskie</c>, <c>mazowieckie</c>, <c>pomorskie</c>, <c>śląskie</c>, <c>wielkopolskie</c>.
    /// </summary>
    public string? Voivodeship { get; init; }

    /// <summary>
    /// Exact postal code match (trimmed). Format depends on source data (e.g. <c>00-001</c>).
    /// </summary>
    public string? PostalCode { get; init; }

    /// <summary>
    /// City substring filter (case-insensitive <b>ILIKE</b> <c>%city%</c>).
    /// </summary>
    public string? City { get; init; }

    /// <summary>
    /// Minimum <b>total revenue</b> (<c>revenue_total</c>).
    /// Currency depends on <c>currency</c> query param (<c>PLN</c>/<c>USD</c>/<c>EUR</c>). If <c>currency</c> is omitted, PLN is used. Values are in <b>full currency units</b> (not thousands), e.g. <c>1000000</c> = one million PLN. Evaluated against the latest indexed financial snapshot per company. Companies with <c>null</c> in the selected revenue column do not match this filter.
    /// </summary>
    public double? RevenueMin { get; init; }

    /// <summary>
    /// Maximum <b>total revenue</b> threshold in full units.
    /// Currency depends on <c>currency</c> query param (<c>PLN</c>/<c>USD</c>/<c>EUR</c>). If <c>currency</c> is omitted, PLN is used.
    /// If <c>revenue_min &gt; revenue_max</c>, the API returns <c>400</c> with code <c>INVALID_RANGE</c>. Evaluated against the latest indexed financial snapshot per company. Companies with <c>null</c> in the selected revenue column do not match this filter.
    /// </summary>
    public double? RevenueMax { get; init; }

    /// <summary>
    /// Minimum operating revenue (net sales / operating revenue field from financials).
    /// </summary>
    public double? RevenueOperatingMin { get; init; }

    public double? RevenueOperatingMax { get; init; }

    public double? ProfitOperatingMin { get; init; }

    public double? ProfitOperatingMax { get; init; }

    public double? ProfitNetMin { get; init; }

    public double? ProfitNetMax { get; init; }

    public double? IncomeTaxMin { get; init; }

    public double? IncomeTaxMax { get; init; }

    public double? CostWagesMin { get; init; }

    public double? CostWagesMax { get; init; }

    public double? CostAmortizationMin { get; init; }

    public double? CostAmortizationMax { get; init; }

    public double? TotalAssetsMin { get; init; }

    public double? TotalAssetsMax { get; init; }

    public double? EbitdaMin { get; init; }

    public double? EbitdaMax { get; init; }

    /// <summary>
    /// Minimum <b>share capital</b> (<c>capital_total</c>).
    /// </summary>
    public double? CapitalMin { get; init; }

    public double? CapitalMax { get; init; }

    /// <summary>
    /// Minimum <b>estimated company value</b> (<c>estimated_value</c>), when present in search index.
    /// </summary>
    public double? EstimatedValueMin { get; init; }

    public double? EstimatedValueMax { get; init; }

    /// <summary>
    /// Earliest <b>registration</b> year (<c>registration_date</c> filter): companies registered on or after <c>YYYY-01-01</c>.
    /// </summary>
    public int? RegistrationYearMin { get; init; }

    /// <summary>
    /// Latest registration year (<c>registration_date</c> on or before <c>YYYY-12-31</c>).
    /// </summary>
    public int? RegistrationYearMax { get; init; }

    /// <summary>
    /// Earliest exact <b>registration date</b> (<c>registration_date</c> on or after this day, inclusive), format <c>YYYY-MM-DD</c>. Takes precedence over <c>registration_year_min</c>. For companies registered today, pass today's date as both <c>registration_date_min</c> and <c>registration_date_max</c>. Applies to KRS companies and to JDG (CEIDG) rows merged into browse results.
    /// </summary>
    public DateTimeOffset? RegistrationDateMin { get; init; }

    /// <summary>
    /// Latest exact registration date (<c>registration_date</c> on or before this day, inclusive), format <c>YYYY-MM-DD</c>. Takes precedence over <c>registration_year_max</c>.
    /// </summary>
    public DateTimeOffset? RegistrationDateMax { get; init; }

    /// <summary>
    /// Earliest <b>financial report period</b> (<c>financial_period_to</c> on or after <c>YYYY-01-01</c>).
    /// When combined with financial metric filters, both are evaluated against the same indexed reporting snapshot.
    /// </summary>
    public int? LastReportYearMin { get; init; }

    /// <summary>
    /// Latest financial report period (<c>financial_period_to</c> on or before <c>YYYY-12-31</c>).
    /// When combined with financial metric filters, both are evaluated against the same indexed reporting snapshot.
    /// </summary>
    public int? LastReportYearMax { get; init; }

    /// <summary>
    /// Boolean filter syntax is accepted (<c>true</c>/<c>false</c>).
    /// Semantics: <c>true</c> applies positive filter (only active companies). <c>false</c> is syntactically valid and treated as no filter.
    /// </summary>
    public bool? StatusActive { get; init; }

    /// <summary>
    /// Legal form substring filter (case-insensitive <b>ILIKE</b> <c>%legal_form%</c>).
    /// Common values/phrases: <c>spółka z ograniczoną odpowiedzialnością</c>, <c>spółka akcyjna</c>, <c>prosta spółka akcyjna</c>, <c>spółka komandytowa</c>, <c>jednoosobowa działalność gospodarcza</c>.
    /// </summary>
    public string? LegalForm { get; init; }

    /// <summary>
    /// Boolean filter syntax is accepted (<c>true</c>/<c>false</c>).
    /// Semantics: <c>true</c> applies positive filter (only companies with email). <c>false</c> is syntactically valid and treated as no filter.
    /// </summary>
    public bool? HasEmail { get; init; }

    /// <summary>
    /// Boolean filter syntax is accepted (<c>true</c>/<c>false</c>).
    /// Semantics: <c>true</c> applies positive filter (only companies with website). <c>false</c> is syntactically valid and treated as no filter.
    /// </summary>
    public bool? HasWebsite { get; init; }

    /// <summary>
    /// Sort the result set by one column (default: completeness / revenue ranking). Rows without a value in that column are excluded while sorting. Text columns (<c>name</c>, <c>nip</c>, <c>regon</c>, <c>city</c>, <c>region</c>, <c>postal_code</c>) sort alphabetically; <c>registration_date</c> with <c>dir=desc</c> lists the newest registrations first (future-dated register errors are skipped); <c>revenue_growth</c> with <c>dir=desc</c> lists the fastest-growing companies (y/y revenue growth in %, latest vs previous financial year from KRS statements; combine with <c>revenue_min</c> to skip small companies). Not applied to free-text (<c>q</c>) or <c>keywords</c> searches, which keep relevance order.
    /// </summary>
    public Sort? Sort { get; init; }

    /// <summary>
    /// Sort direction for <c>sort</c> (<c>asc</c> or <c>desc</c>, default <c>desc</c>).
    /// </summary>
    public Dir Dir { get; init; } = Dir.Desc;
}
