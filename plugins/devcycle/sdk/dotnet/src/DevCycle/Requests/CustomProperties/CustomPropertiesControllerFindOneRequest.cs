namespace DevCycle.Requests.CustomProperties;

/// <summary>
/// The inputs of the CustomPropertiesControllerFindOne operation.
/// </summary>
public sealed record CustomPropertiesControllerFindOneRequest
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
