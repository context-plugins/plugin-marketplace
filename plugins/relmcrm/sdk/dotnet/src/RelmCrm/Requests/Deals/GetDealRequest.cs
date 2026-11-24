namespace RelmCrm.Requests.Deals;

/// <summary>
/// The inputs of the GetDeal operation.
/// </summary>
public sealed record GetDealRequest
{
    public required string Id { get; init; }
}
