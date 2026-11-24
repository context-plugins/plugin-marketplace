namespace Basiq.Requests.Reports;

/// <summary>
/// The inputs of the RetrieveReport operation.
/// </summary>
public sealed record RetrieveReportRequest
{
    /// <summary>
    /// The ID of the generated report
    /// </summary>
    public required string Id { get; init; }
}
