using Statable.Models;

namespace Statable.Requests.Sites;

/// <summary>
/// The inputs of the CreateGoal operation.
/// </summary>
public sealed record CreateGoalRequest
{
    /// <summary>
    /// Numeric site id.
    /// </summary>
    public required long Id { get; init; }

    public required GoalRequest Body { get; init; }
}
