namespace Givebutter.Requests.CampaignDiscountCodes;

/// <summary>
/// The inputs of the CampaignsDiscountCodesShow operation.
/// </summary>
public sealed record CampaignsDiscountCodesShowRequest
{
    /// <summary>
    /// The campaign ID
    /// </summary>
    public required int Campaign { get; init; }

    /// <summary>
    /// The discount code ID
    /// </summary>
    public required int DiscountCode { get; init; }
}
