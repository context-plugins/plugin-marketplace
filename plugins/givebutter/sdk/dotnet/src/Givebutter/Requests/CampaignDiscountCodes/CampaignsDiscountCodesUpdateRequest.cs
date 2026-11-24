using Givebutter.Models;

namespace Givebutter.Requests.CampaignDiscountCodes;

/// <summary>
/// The inputs of the CampaignsDiscountCodesUpdate operation.
/// </summary>
public sealed record CampaignsDiscountCodesUpdateRequest
{
    /// <summary>
    /// The campaign ID
    /// </summary>
    public required int Campaign { get; init; }

    /// <summary>
    /// The discount code ID
    /// </summary>
    public required int DiscountCode { get; init; }

    public required UpdateCampaignDiscountCodeRequest Body { get; init; }
}
