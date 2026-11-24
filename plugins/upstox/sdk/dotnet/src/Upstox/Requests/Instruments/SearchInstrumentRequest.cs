using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.Instruments;

/// <summary>
/// The inputs of the SearchInstrument operation.
/// </summary>
public sealed record SearchInstrumentRequest
{
    /// <summary>
    /// natural language query
    /// </summary>
    [MinLength(1)]
    public required string Query { get; init; }

    /// <summary>
    /// Comma separated exchanges
    /// </summary>
    [RegularExpression("^(ALL|NSE|BSE|MCX)(,(ALL|NSE|BSE|MCX))*$")]
    public string? Exchanges { get; init; }

    /// <summary>
    /// Comma separated segments
    /// </summary>
    [RegularExpression("^(ALL|EQ|FO|CURR|COMM|INDEX|OPT|FUT|OPTION_CHAIN)(,(ALL|EQ|FO|CURR|COMM|INDEX|OPT|FUT|OPTION_CHAIN))*$")]
    public string? Segments { get; init; }

    /// <summary>
    /// Comma separated instrument types
    /// </summary>
    public string? InstrumentTypes { get; init; }

    /// <summary>
    /// expiry in format: yyyy-MM-dd
    /// </summary>
    public string? Expiry { get; init; }

    /// <summary>
    /// page number greater than or equal to 1
    /// </summary>
    public int? AtmOffset { get; init; }

    /// <summary>
    /// ATM offset number for queries like ATM, ATM+1, ATM-1, etc.
    /// </summary>
    public int PageNumber { get; init; } = 1;

    /// <summary>
    /// no of records in a single page
    /// </summary>
    public int Records { get; init; } = 10;
}
