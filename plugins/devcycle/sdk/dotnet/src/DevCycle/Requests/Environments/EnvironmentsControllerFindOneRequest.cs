namespace DevCycle.Requests.Environments;

/// <summary>
/// The inputs of the EnvironmentsControllerFindOne operation.
/// </summary>
public sealed record EnvironmentsControllerFindOneRequest
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
