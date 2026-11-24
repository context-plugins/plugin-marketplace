namespace HealthGorilla.Requests.PatientApi;

/// <summary>
/// The inputs of the PatientEverything operation.
/// </summary>
public sealed record PatientEverythingRequest
{
    /// <summary>
    /// The logical id of the resource.
    /// </summary>
    public required string Id { get; init; }
}
