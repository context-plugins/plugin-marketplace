using DevCycle.Models;

namespace DevCycle.Requests.VariablesApi;

/// <summary>
/// The inputs of the VariablesControllerUpdateStatus operation.
/// </summary>
public sealed record VariablesControllerUpdateStatusRequest
{
    /// <summary>
    /// A Variable key or ID
    /// </summary>
    public required string Key { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required UpdateVariableStatusDto Body { get; init; }
}
