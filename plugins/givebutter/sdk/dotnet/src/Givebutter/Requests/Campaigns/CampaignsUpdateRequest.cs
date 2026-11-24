using Givebutter.Models;

namespace Givebutter.Requests.Campaigns;

/// <summary>
/// The inputs of the CampaignsUpdate operation.
/// </summary>
public sealed record CampaignsUpdateRequest
{
    /// <summary>
    /// The campaign ID
    /// </summary>
    public required int Campaign { get; init; }

    public UpdateCampaignRequest? Body { get; init; }
}
