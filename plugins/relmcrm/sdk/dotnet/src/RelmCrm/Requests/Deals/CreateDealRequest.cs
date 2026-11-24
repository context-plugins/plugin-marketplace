using RelmCrm.Models;

namespace RelmCrm.Requests.Deals;

/// <summary>
/// The inputs of the CreateDeal operation.
/// </summary>
public sealed record CreateDealRequest
{
    /// <summary>
    /// Safely retry a create: same key + same body replays the original result.
    /// </summary>
    public string? IdempotencyKey { get; init; }

    public required DealInput Body { get; init; }
}
