namespace Shortcut.Requests.Objectives;

/// <summary>
/// The inputs of the GetObjective operation.
/// </summary>
public sealed record GetObjectiveRequest
{
    /// <summary>
    /// The ID of the Objective.
    /// </summary>
    public required long ObjectivePublicId { get; init; }
}
