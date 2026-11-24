namespace HealthGorilla.Requests.DiagnosticReportApi;

/// <summary>
/// The inputs of the SearchDiagnosticReports operation.
/// </summary>
public sealed record SearchDiagnosticReportsRequest
{
    /// <summary>
    /// Reference to the subject Patient (e.g. Patient/{id}).
    /// </summary>
    public string? Patient { get; init; }

    public string? Category { get; init; }

    public string? Date { get; init; }

    /// <summary>
    /// Number of results per page.
    /// </summary>
    public int? Count { get; init; }
}
