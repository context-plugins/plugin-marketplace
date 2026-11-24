namespace DevCycle.Requests.Variations;

/// <summary>
/// The inputs of the VariationsControllerFindAll operation.
/// </summary>
public sealed record VariationsControllerFindAllRequest
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
