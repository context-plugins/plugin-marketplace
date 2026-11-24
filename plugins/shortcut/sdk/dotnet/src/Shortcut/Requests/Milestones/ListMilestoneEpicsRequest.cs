namespace Shortcut.Requests.Milestones;

/// <summary>
/// The inputs of the ListMilestoneEpics operation.
/// </summary>
public sealed record ListMilestoneEpicsRequest
{
    /// <summary>
    /// The ID of the Milestone.
    /// </summary>
    public required long MilestonePublicId { get; init; }
}
