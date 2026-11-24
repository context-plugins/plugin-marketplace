using RelmCrm.Models;

namespace RelmCrm.Requests.Deals;

/// <summary>
/// The inputs of the UpdateDeal operation.
/// </summary>
public sealed record UpdateDealRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.
    /// </summary>
    public string? IfMatch { get; init; }

    public required DealInput Body { get; init; }
}
