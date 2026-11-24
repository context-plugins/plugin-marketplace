using System;
using Compabase.Models.Enums;

namespace Compabase.Requests.Companies;

/// <summary>
/// The inputs of the GetCompaniesCount operation.
/// </summary>
public sealed record GetCompaniesCountRequest
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
}
