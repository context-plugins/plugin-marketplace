namespace Givebutter.Requests.CampaignDiscountCodes;

/// <summary>
/// The inputs of the CampaignsDiscountCodesDestroy operation.
/// </summary>
public sealed record CampaignsDiscountCodesDestroyRequest
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
