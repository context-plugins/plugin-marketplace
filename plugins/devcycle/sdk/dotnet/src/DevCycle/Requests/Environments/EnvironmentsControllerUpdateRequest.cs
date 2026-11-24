using DevCycle.Models;

namespace DevCycle.Requests.Environments;

/// <summary>
/// The inputs of the EnvironmentsControllerUpdate operation.
/// </summary>
public sealed record EnvironmentsControllerUpdateRequest
{
    /// <summary>
    /// A Environment key or ID
    /// </summary>
    public required string Key { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required UpdateEnvironmentDto Body { get; init; }
}
