namespace RelmCrm.Requests.Deals;

/// <summary>
/// The inputs of the RestoreDeal operation.
/// </summary>
public sealed record RestoreDealRequest
{
    public required string Id { get; init; }
}
