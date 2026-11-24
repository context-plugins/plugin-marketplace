using System;
using Compabase.Core.Validation.Attributes;

namespace Compabase.Requests.Companies;

/// <summary>
/// The inputs of the GetCompaniesExport operation.
/// </summary>
public sealed record GetCompaniesExportRequest
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
    /// Page size for bulk export (max 500).
    /// </summary>
    [Minimum(1)]
    [Maximum(500)]
    public int Limit { get; init; } = 100;

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
    /// Boolean filter syntax is accepted (<c>true</c>/<c>false</c>).
    /// Semantics: <c>true</c> applies positive filter (only active companies). <c>false</c> is syntactically valid and treated as no filter.
    /// </summary>
    public bool? StatusActive { get; init; }

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
}
