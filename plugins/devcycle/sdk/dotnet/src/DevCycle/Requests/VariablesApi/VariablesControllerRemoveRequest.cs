namespace DevCycle.Requests.VariablesApi;

/// <summary>
/// The inputs of the VariablesControllerRemove operation.
/// </summary>
public sealed record VariablesControllerRemoveRequest
{
    /// <summary>
    /// A Variable key or ID
    /// </summary>
    public required string Key { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }
}
