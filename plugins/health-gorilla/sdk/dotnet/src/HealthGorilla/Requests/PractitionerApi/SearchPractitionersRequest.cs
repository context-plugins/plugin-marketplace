namespace HealthGorilla.Requests.PractitionerApi;

/// <summary>
/// The inputs of the SearchPractitioners operation.
/// </summary>
public sealed record SearchPractitionersRequest
{
    /// <summary>
    /// A resource identifier (system|value).
    /// </summary>
    public string? Identifier { get; init; }

    /// <summary>
    /// A portion of the name.
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// Number of results per page.
    /// </summary>
    public int? Count { get; init; }
}
