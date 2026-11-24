namespace DevCycle.Requests.Overrides;

/// <summary>
/// The inputs of the OverridesControllerFindOverridesForProject operation.
/// </summary>
public sealed record OverridesControllerFindOverridesForProjectRequest
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }
}
