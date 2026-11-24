namespace Apibara.Requests.Shipping;

/// <summary>
/// The inputs of the GetAuctionToPortShipping operation.
/// </summary>
public sealed record GetAuctionToPortShippingRequest
{
    /// <summary>
    /// Vehicle VIN.
    /// </summary>
    public string? Vin { get; init; }

    /// <summary>
    /// Auction lot number.
    /// </summary>
    public string? LotNumber { get; init; }

    /// <summary>
    /// Comma-separated list of destination ports to return.
    /// </summary>
    public string? Ports { get; init; }
}
