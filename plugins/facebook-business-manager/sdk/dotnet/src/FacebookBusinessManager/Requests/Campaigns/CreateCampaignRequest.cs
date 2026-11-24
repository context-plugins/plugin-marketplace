using FacebookBusinessManager.Models;

namespace FacebookBusinessManager.Requests.Campaigns;

/// <summary>
/// The inputs of the CreateCampaign operation.
/// </summary>
public sealed record CreateCampaignRequest
{
    /// <summary>
    /// The ID of the ad account (numeric, without the act_ prefix)
    /// </summary>
    public required string AdAccountId { get; init; }

    public required CampaignCreate Body { get; init; }
}
