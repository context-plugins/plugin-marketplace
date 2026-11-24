namespace Shortcut.Requests.Milestones;

/// <summary>
/// The inputs of the GetMilestone operation.
/// </summary>
public sealed record GetMilestoneRequest
{
    /// <summary>
    /// The ID of the Milestone.
    /// </summary>
    public required long MilestonePublicId { get; init; }
}
