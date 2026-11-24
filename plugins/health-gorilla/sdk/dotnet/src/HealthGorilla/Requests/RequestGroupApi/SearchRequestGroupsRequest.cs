namespace HealthGorilla.Requests.RequestGroupApi;

/// <summary>
/// The inputs of the SearchRequestGroups operation.
/// </summary>
public sealed record SearchRequestGroupsRequest
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
