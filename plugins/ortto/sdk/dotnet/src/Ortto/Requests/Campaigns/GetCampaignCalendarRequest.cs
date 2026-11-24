using Ortto.Models;

namespace Ortto.Requests.Campaigns;

/// <summary>
/// The inputs of the GetCampaignCalendar operation.
/// </summary>
public sealed record GetCampaignCalendarRequest
{
    public required CampaignCalendarRequest Body { get; init; }
}
