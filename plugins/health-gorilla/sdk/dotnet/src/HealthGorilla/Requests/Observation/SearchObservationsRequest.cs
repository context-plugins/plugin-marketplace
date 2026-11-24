namespace HealthGorilla.Requests.Observation;

/// <summary>
/// The inputs of the SearchObservations operation.
/// </summary>
public sealed record SearchObservationsRequest
{
    /// <summary>
    /// Reference to the subject Patient (e.g. Patient/{id}).
    /// </summary>
    public string? Patient { get; init; }

    public string? Code { get; init; }

    /// <summary>
    /// Number of results per page.
    /// </summary>
    public int? Count { get; init; }
}
