namespace FacebookBusinessManager.Requests.Campaigns;

/// <summary>
/// The inputs of the DeleteCampaign operation.
/// </summary>
public sealed record DeleteCampaignRequest
{
    /// <summary>
    /// The ID of the campaign
    /// </summary>
    public required string CampaignId { get; init; }
}
