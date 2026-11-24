namespace HealthGorilla.Requests.PatientApi;

/// <summary>
/// The inputs of the ReadPatient operation.
/// </summary>
public sealed record ReadPatientRequest
{
    /// <summary>
    /// The logical id of the resource.
    /// </summary>
    public required string Id { get; init; }
}
