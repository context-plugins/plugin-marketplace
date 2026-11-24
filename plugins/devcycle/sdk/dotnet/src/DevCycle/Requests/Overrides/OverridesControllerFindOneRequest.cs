namespace DevCycle.Requests.Overrides;

/// <summary>
/// The inputs of the OverridesControllerFindOne operation.
/// </summary>
public sealed record OverridesControllerFindOneRequest
{
    /// <summary>
    /// A Feature key or ID
    /// </summary>
    public required string Feature { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }
}
