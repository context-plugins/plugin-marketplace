namespace CompSniper.Requests.BestOfferPrices;

/// <summary>
/// The inputs of the GetBestOfferPrices operation.
/// </summary>
public sealed record GetBestOfferPricesRequest
{
    /// <summary>
    /// 1 to 100 eBay item IDs, separated by commas.
    /// </summary>
    public required string ItemIds { get; init; }
}
