using DevCycle.Models;

namespace DevCycle.Requests.Audiences;

/// <summary>
/// The inputs of the AudiencesControllerUpdate operation.
/// </summary>
public sealed record AudiencesControllerUpdateRequest
{
    /// <summary>
    /// A Audience key or ID
    /// </summary>
    public required string Key { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required UpdateAudienceDto Body { get; init; }
}
