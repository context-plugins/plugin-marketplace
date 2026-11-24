using FacebookBusinessManager.Models;

namespace FacebookBusinessManager.Requests.Campaigns;

/// <summary>
/// The inputs of the UpdateCampaign operation.
/// </summary>
public sealed record UpdateCampaignRequest
{
    /// <summary>
    /// The ID of the campaign
    /// </summary>
    public required string CampaignId { get; init; }

    public required CampaignUpdate Body { get; init; }
}
