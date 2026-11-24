using DevCycle.Models;

namespace DevCycle.Requests.CustomProperties;

/// <summary>
/// The inputs of the CustomPropertiesControllerUpdate operation.
/// </summary>
public sealed record CustomPropertiesControllerUpdateRequest
{
    /// <summary>
    /// A Custom Property key or ID
    /// </summary>
    public required string Key { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required UpdateCustomPropertyDto Body { get; init; }
}
