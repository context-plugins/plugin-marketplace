using System;

namespace HealthGorilla.Requests.PatientApi;

/// <summary>
/// The inputs of the SearchPatients operation.
/// </summary>
public sealed record SearchPatientsRequest
{
    /// <summary>
    /// A resource identifier (system|value).
    /// </summary>
    public string? Identifier { get; init; }

    /// <summary>
    /// A portion of the name.
    /// </summary>
    public string? Name { get; init; }

    public DateTimeOffset? Birthdate { get; init; }

    public string? Gender { get; init; }

    /// <summary>
    /// Number of results per page.
    /// </summary>
    public int? Count { get; init; }
}
