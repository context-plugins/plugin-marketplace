using System;

namespace DidLogic.Requests.Reports;

/// <summary>
/// The inputs of the TransactionsIndex operation.
/// </summary>
public sealed record TransactionsIndexRequest
{
    /// <summary>
    /// Start of the reporting period (YYYY-MM-DD)
    /// </summary>
    public required DateTimeOffset StartDate { get; init; }

    /// <summary>
    /// End of the reporting period (YYYY-MM-DD)
    /// </summary>
    public required DateTimeOffset EndDate { get; init; }

    /// <summary>
    /// Comma-separated transaction type(s); see the operation description for the full list of accepted values.
    /// </summary>
    public required string Type { get; init; }
}
