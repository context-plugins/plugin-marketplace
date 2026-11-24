using RelmCrm.Models;

namespace RelmCrm.Requests.Activities;

/// <summary>
/// The inputs of the CreateActivity operation.
/// </summary>
public sealed record CreateActivityRequest
{
    /// <summary>
    /// Safely retry a create: same key + same body replays the original result.
    /// </summary>
    public string? IdempotencyKey { get; init; }

    public required ActivityInput Body { get; init; }
}
