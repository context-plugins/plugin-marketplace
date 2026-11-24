namespace RelmCrm.Requests.Deals;

/// <summary>
/// The inputs of the DeleteDeal operation.
/// </summary>
public sealed record DeleteDealRequest
{
    public required string Id { get; init; }
}
