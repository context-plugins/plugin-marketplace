namespace Shortcut.Requests.Objectives;

/// <summary>
/// The inputs of the ListObjectiveEpics operation.
/// </summary>
public sealed record ListObjectiveEpicsRequest
{
    /// <summary>
    /// The ID of the Objective.
    /// </summary>
    public required long ObjectivePublicId { get; init; }
}
