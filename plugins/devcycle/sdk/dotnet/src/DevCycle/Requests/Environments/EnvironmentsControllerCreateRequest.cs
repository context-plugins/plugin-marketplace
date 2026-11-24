using DevCycle.Models;

namespace DevCycle.Requests.Environments;

/// <summary>
/// The inputs of the EnvironmentsControllerCreate operation.
/// </summary>
public sealed record EnvironmentsControllerCreateRequest
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required CreateEnvironmentDto Body { get; init; }
}
