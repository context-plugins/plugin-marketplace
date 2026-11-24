using Statable.Models;

namespace Statable.Requests.Sites;

/// <summary>
/// The inputs of the UpdateGoal operation.
/// </summary>
public sealed record UpdateGoalRequest
{
    public required long Id { get; init; }

    public required long GoalId { get; init; }

    public required GoalRequest Body { get; init; }
}
