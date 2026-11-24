namespace Bitly.Requests.CampaignsApi;

/// <summary>
/// The inputs of the GetCampaign operation.
/// </summary>
public sealed record GetCampaignRequest
{
    /// <summary>
    /// A GUID for a Bitly campaign
    /// </summary>
    public required string CampaignGuid { get; init; }
}
