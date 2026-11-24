namespace Basiq.Requests.Reports;

/// <summary>
/// The inputs of the RetrieveSpecificReportType operation.
/// </summary>
public sealed record RetrieveSpecificReportTypeRequest
{
    /// <summary>
    /// The type of the report
    /// </summary>
    public required string ReportTypeId { get; init; }
}
