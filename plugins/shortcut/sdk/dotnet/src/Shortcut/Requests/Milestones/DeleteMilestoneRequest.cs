namespace Shortcut.Requests.Milestones;

/// <summary>
/// The inputs of the DeleteMilestone operation.
/// </summary>
public sealed record DeleteMilestoneRequest
{
    /// <summary>
    /// The ID of the Milestone.
    /// </summary>
    public required long MilestonePublicId { get; init; }
}
