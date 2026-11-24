using Shortcut.Models;

namespace Shortcut.Requests.Objectives;

/// <summary>
/// The inputs of the CreateObjectiveHealth operation.
/// </summary>
public sealed record CreateObjectiveHealthRequest
{
    /// <summary>
    /// The unique ID of the Objective.
    /// </summary>
    public required long ObjectivePublicId { get; init; }

    public required CreateObjectiveHealth Body { get; init; }
}
