namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Jobsreport operation.
/// </summary>
public sealed record JobsreportRequest
{
    /// <summary>
    /// Optional date in YYYY-MM format for historical lookup. Omit for current data.
    /// </summary>
    public string? Date { get; init; }
}
