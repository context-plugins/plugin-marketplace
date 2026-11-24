namespace DevCycle.Requests.CustomProperties;

/// <summary>
/// The inputs of the CustomPropertiesControllerRemove operation.
/// </summary>
public sealed record CustomPropertiesControllerRemoveRequest
{
    /// <summary>
    /// A Custom Property key or ID
    /// </summary>
    public required string Key { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }
}
