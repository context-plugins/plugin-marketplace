namespace DidLogic.Requests.Reports;

/// <summary>
/// The inputs of the AsrReportShow operation.
/// </summary>
public sealed record AsrReportShowRequest
{
    /// <summary>
    /// Report start date (YYYY-MM-DD format)
    /// </summary>
    public required string StartDate { get; init; }

    /// <summary>
    /// Report end date (YYYY-MM-DD format)
    /// </summary>
    public required string EndDate { get; init; }
}
