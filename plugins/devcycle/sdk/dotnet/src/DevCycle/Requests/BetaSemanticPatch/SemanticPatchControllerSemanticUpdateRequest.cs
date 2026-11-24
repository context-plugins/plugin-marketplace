using DevCycle.Models;

namespace DevCycle.Requests.BetaSemanticPatch;

/// <summary>
/// The inputs of the SemanticPatchControllerSemanticUpdate operation.
/// </summary>
public sealed record SemanticPatchControllerSemanticUpdateRequest
{
    /// <summary>
    /// A Audience key or ID
    /// </summary>
    public required string Key { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required AudiencePatchDto Body { get; init; }
}
