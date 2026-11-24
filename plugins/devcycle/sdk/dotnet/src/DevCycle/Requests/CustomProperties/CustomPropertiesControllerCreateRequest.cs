using DevCycle.Models;

namespace DevCycle.Requests.CustomProperties;

/// <summary>
/// The inputs of the CustomPropertiesControllerCreate operation.
/// </summary>
public sealed record CustomPropertiesControllerCreateRequest
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required CreateCustomPropertyDto Body { get; init; }
}
