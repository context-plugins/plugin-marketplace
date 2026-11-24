namespace Shortcut.Requests.Objectives;

/// <summary>
/// The inputs of the GetObjectiveHealth operation.
/// </summary>
public sealed record GetObjectiveHealthRequest
{
    /// <summary>
    /// The unique ID of the Objective.
    /// </summary>
    public required long ObjectivePublicId { get; init; }
}
