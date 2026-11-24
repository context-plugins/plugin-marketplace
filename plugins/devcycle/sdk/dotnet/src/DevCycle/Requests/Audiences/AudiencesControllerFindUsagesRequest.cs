namespace DevCycle.Requests.Audiences;

/// <summary>
/// The inputs of the AudiencesControllerFindUsages operation.
/// </summary>
public sealed record AudiencesControllerFindUsagesRequest
{
    /// <summary>
    /// A Audience key or ID
    /// </summary>
    public required string Key { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }
}
