namespace Shortcut.Requests.Objectives;

/// <summary>
/// The inputs of the ListObjectiveHealths operation.
/// </summary>
public sealed record ListObjectiveHealthsRequest
{
    /// <summary>
    /// The unique ID of the Objective.
    /// </summary>
    public required long ObjectivePublicId { get; init; }
}
