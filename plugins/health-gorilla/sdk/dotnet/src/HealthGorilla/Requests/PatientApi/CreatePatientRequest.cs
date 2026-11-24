using HealthGorilla.Models;

namespace HealthGorilla.Requests.PatientApi;

/// <summary>
/// The inputs of the CreatePatient operation.
/// </summary>
public sealed record CreatePatientRequest
{
    public required Patient Body { get; init; }
}
