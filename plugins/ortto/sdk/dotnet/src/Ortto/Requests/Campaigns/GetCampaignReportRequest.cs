using Ortto.Models;

namespace Ortto.Requests.Campaigns;

/// <summary>
/// The inputs of the GetCampaignReport operation.
/// </summary>
public sealed record GetCampaignReportRequest
{
    public required CampaignReportsGetRequest Body { get; init; }
}
