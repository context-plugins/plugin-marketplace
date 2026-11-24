using HealthGorilla.Models;

namespace HealthGorilla.Requests.PatientApi;

/// <summary>
/// The inputs of the UpdatePatient operation.
/// </summary>
public sealed record UpdatePatientRequest
{
    /// <summary>
    /// The logical id of the resource.
    /// </summary>
    public required string Id { get; init; }

    public required Patient Body { get; init; }
}
