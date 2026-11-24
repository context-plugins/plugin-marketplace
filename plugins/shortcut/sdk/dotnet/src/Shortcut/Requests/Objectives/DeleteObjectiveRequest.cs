namespace Shortcut.Requests.Objectives;

/// <summary>
/// The inputs of the DeleteObjective operation.
/// </summary>
public sealed record DeleteObjectiveRequest
{
    /// <summary>
    /// The ID of the Objective.
    /// </summary>
    public required long ObjectivePublicId { get; init; }
}
