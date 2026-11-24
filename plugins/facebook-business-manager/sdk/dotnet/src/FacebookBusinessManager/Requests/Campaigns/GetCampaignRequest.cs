namespace FacebookBusinessManager.Requests.Campaigns;

/// <summary>
/// The inputs of the GetCampaign operation.
/// </summary>
public sealed record GetCampaignRequest
{
    /// <summary>
    /// The ID of the campaign
    /// </summary>
    public required string CampaignId { get; init; }

    /// <summary>
    /// Comma-separated list of fields to include in the response. If omitted, default fields are returned.
    /// </summary>
    public string? Fields { get; init; }
}
