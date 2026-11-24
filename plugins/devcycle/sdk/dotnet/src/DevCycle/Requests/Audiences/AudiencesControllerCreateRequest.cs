using DevCycle.Models;

namespace DevCycle.Requests.Audiences;

/// <summary>
/// The inputs of the AudiencesControllerCreate operation.
/// </summary>
public sealed record AudiencesControllerCreateRequest
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required CreateAudienceDto Body { get; init; }
}
