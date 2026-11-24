using Shortcut.Models;

namespace Shortcut.Requests.Milestones;

/// <summary>
/// The inputs of the CreateMilestone operation.
/// </summary>
public sealed record CreateMilestoneRequest
{
    public required CreateMilestone Body { get; init; }
}
