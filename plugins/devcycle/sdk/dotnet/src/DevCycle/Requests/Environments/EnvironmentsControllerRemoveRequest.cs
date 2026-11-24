namespace DevCycle.Requests.Environments;

/// <summary>
/// The inputs of the EnvironmentsControllerRemove operation.
/// </summary>
public sealed record EnvironmentsControllerRemoveRequest
{
    /// <summary>
    /// A Environment key or ID
    /// </summary>
    public required string Key { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }
}
