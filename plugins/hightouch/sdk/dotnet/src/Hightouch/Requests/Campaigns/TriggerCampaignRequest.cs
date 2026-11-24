using Hightouch.Models;

namespace Hightouch.Requests.Campaigns;

/// <summary>
/// The inputs of the TriggerCampaign operation.
/// </summary>
public sealed record TriggerCampaignRequest
{
    public required string CampaignId { get; init; }

    public required StartCampaignRequest Body { get; init; }
}
