namespace Basiq.Requests.Reports;

/// <summary>
/// The inputs of the DeleteReport operation.
/// </summary>
public sealed record DeleteReportRequest
{
    /// <summary>
    /// The ID of the generated report
    /// </summary>
    public required string Id { get; init; }
}
