using Givebutter.Models;

namespace Givebutter.Requests.Campaigns;

/// <summary>
/// The inputs of the CampaignsStore operation.
/// </summary>
public sealed record CampaignsStoreRequest
{
    public required StoreCampaignRequest Body { get; init; }
}
