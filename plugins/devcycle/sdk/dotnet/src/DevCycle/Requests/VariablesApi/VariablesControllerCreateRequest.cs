using DevCycle.Models;

namespace DevCycle.Requests.VariablesApi;

/// <summary>
/// The inputs of the VariablesControllerCreate operation.
/// </summary>
public sealed record VariablesControllerCreateRequest
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required CreateVariableDtoDevCycleManagementVariablesApi Body { get; init; }
}
