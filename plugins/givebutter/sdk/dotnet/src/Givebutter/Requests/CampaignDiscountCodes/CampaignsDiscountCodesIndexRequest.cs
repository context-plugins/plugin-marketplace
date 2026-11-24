namespace Givebutter.Requests.CampaignDiscountCodes;

/// <summary>
/// The inputs of the CampaignsDiscountCodesIndex operation.
/// </summary>
public sealed record CampaignsDiscountCodesIndexRequest
{
    /// <summary>
    /// The campaign ID
    /// </summary>
    public required int Campaign { get; init; }
}
