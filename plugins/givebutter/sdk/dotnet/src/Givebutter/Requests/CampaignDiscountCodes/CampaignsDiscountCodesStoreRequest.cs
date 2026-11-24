using Givebutter.Models;

namespace Givebutter.Requests.CampaignDiscountCodes;

/// <summary>
/// The inputs of the CampaignsDiscountCodesStore operation.
/// </summary>
public sealed record CampaignsDiscountCodesStoreRequest
{
    /// <summary>
    /// The campaign ID
    /// </summary>
    public required int Campaign { get; init; }

    public required StoreCampaignDiscountCodeRequest Body { get; init; }
}
