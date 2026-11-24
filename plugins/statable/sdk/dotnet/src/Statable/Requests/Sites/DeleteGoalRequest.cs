namespace Statable.Requests.Sites;

/// <summary>
/// The inputs of the DeleteGoal operation.
/// </summary>
public sealed record DeleteGoalRequest
{
    public required long Id { get; init; }

    public required long GoalId { get; init; }
}
