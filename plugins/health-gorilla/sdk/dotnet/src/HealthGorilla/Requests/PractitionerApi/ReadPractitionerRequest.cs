namespace HealthGorilla.Requests.PractitionerApi;

/// <summary>
/// The inputs of the ReadPractitioner operation.
/// </summary>
public sealed record ReadPractitionerRequest
{
    /// <summary>
    /// The logical id of the resource.
    /// </summary>
    public required string Id { get; init; }
}
