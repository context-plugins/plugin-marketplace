using DevCycle.Models;

namespace DevCycle.Requests.VariablesApi;

/// <summary>
/// The inputs of the VariablesControllerUpdate operation.
/// </summary>
public sealed record VariablesControllerUpdateRequest
{
    /// <summary>
    /// A Variable key or ID
    /// </summary>
    public required string Key { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required UpdateVariableDto Body { get; init; }
}
