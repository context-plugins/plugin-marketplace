namespace DevCycle.Requests.Variations;

/// <summary>
/// The inputs of the VariationsControllerFindOne operation.
/// </summary>
public sealed record VariationsControllerFindOneRequest
{
    /// <summary>
    /// A Variation key or ID
    /// </summary>
    public required string Key { get; init; }

    /// <summary>
    /// A Feature key or ID
    /// </summary>
    public required string Feature { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }
}
