using Bitly.Models;

namespace Bitly.Requests.CampaignsApi;

/// <summary>
/// The inputs of the UpdateCampaign operation.
/// </summary>
public sealed record UpdateCampaignRequest
{
    /// <summary>
    /// A GUID for a Bitly campaign
    /// </summary>
    public required string CampaignGuid { get; init; }

    public required CampaignModify Body { get; init; }
}
