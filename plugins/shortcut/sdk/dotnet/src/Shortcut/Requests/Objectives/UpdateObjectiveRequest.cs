using Shortcut.Models;

namespace Shortcut.Requests.Objectives;

/// <summary>
/// The inputs of the UpdateObjective operation.
/// </summary>
public sealed record UpdateObjectiveRequest
{
    /// <summary>
    /// The ID of the Objective.
    /// </summary>
    public required long ObjectivePublicId { get; init; }

    public required UpdateObjective Body { get; init; }
}
