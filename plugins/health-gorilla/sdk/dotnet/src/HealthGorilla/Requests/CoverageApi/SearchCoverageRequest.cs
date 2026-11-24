namespace HealthGorilla.Requests.CoverageApi;

/// <summary>
/// The inputs of the SearchCoverage operation.
/// </summary>
public sealed record SearchCoverageRequest
{
    /// <summary>
    /// Reference to the subject Patient (e.g. Patient/{id}).
    /// </summary>
    public string? Patient { get; init; }

    /// <summary>
    /// Number of results per page.
    /// </summary>
    public int? Count { get; init; }
}
