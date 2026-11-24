namespace DevCycle.Requests.Overrides;

/// <summary>
/// The inputs of the OverridesControllerDeleteOverridesForProject operation.
/// </summary>
public sealed record OverridesControllerDeleteOverridesForProjectRequest
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }
}
