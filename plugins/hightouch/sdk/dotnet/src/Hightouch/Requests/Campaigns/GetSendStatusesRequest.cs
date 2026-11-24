using Hightouch.Models;

namespace Hightouch.Requests.Campaigns;

/// <summary>
/// The inputs of the GetSendStatuses operation.
/// </summary>
public sealed record GetSendStatusesRequest
{
    public required string CampaignId { get; init; }

    public required BatchSendStatusRequest Body { get; init; }
}
