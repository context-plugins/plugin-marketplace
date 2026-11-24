using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Perigon.Core.Validation.Attributes;

namespace Perigon.Requests.SupplementalEndpoints;

/// <summary>
/// The inputs of the SearchCompanies operation.
/// </summary>
public sealed record SearchCompaniesRequest
{
    /// <summary>
    /// String Array. Filter by unique company identifiers. Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? Id { get; init; }

    /// <summary>
    /// String Array. Filter by company stock ticker symbols (e.g., AAPL, MSFT, GOOGL). Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? Symbol { get; init; }

    /// <summary>
    /// String Array. Filter by ISIN codes on company ticker listings. Matches symbols.isin rather than the company-level ISIN. Multiple values create an OR filter.
    /// </summary>
    [MinLength(0)]
    [MaxLength(300)]
    public IReadOnlyList<string>? SymbolIsin { get; init; }

    /// <summary>
    /// String Array. Filter by company domains or websites (e.g., apple.com, microsoft.com). Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? Domain { get; init; }

    /// <summary>
    /// String Array. Filter by company headquarters country. Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? Country { get; init; }

    /// <summary>
    /// String Array. Filter by stock exchange where companies are listed (e.g., NASDAQ, NYSE). Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? Exchange { get; init; }

    /// <summary>
    /// Integer. Filter for companies with at least this many employees.
    /// </summary>
    public int? NumEmployeesFrom { get; init; }

    /// <summary>
    /// Integer. Filter for companies with no more than this many employees.
    /// </summary>
    public int? NumEmployeesTo { get; init; }

    /// <summary>
    /// Date. Filter for companies that went public on or after this date. Accepts ISO 8601 format (e.g., 2023-01-01T00:00:00) or yyyy-mm-dd format.
    /// </summary>
    public DateTimeOffset? IpoFrom { get; init; }

    /// <summary>
    /// Date. Filter for companies that went public on or before this date. Accepts ISO 8601 format (e.g., 2023-12-31T23:59:59) or yyyy-mm-dd format.
    /// </summary>
    public DateTimeOffset? IpoTo { get; init; }

    /// <summary>
    /// String. Primary search query for filtering companies across name, alternative names, domains, and ticker symbols. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// String. Search within company names. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// String. Filter by company industry classifications. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.
    /// </summary>
    public string? Industry { get; init; }

    /// <summary>
    /// String. Filter by company sector classifications. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.
    /// </summary>
    public string? Sector { get; init; }

    /// <summary>
    /// Integer. The number of companies to return per page in the paginated response.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int? Size { get; init; }

    /// <summary>
    /// Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
    /// </summary>
    [Minimum(0)]
    public int? Page { get; init; }
}
