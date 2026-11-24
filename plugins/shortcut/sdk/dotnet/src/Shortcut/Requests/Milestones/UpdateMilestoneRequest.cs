using Shortcut.Models;

namespace Shortcut.Requests.Milestones;

/// <summary>
/// The inputs of the UpdateMilestone operation.
/// </summary>
public sealed record UpdateMilestoneRequest
{
    /// <summary>
    /// The ID of the Milestone.
    /// </summary>
    public required long MilestonePublicId { get; init; }

    public required UpdateMilestone Body { get; init; }
}
