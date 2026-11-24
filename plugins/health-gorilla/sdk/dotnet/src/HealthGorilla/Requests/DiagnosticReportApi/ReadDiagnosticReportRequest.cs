namespace HealthGorilla.Requests.DiagnosticReportApi;

/// <summary>
/// The inputs of the ReadDiagnosticReport operation.
/// </summary>
public sealed record ReadDiagnosticReportRequest
{
    /// <summary>
    /// The logical id of the resource.
    /// </summary>
    public required string Id { get; init; }
}
