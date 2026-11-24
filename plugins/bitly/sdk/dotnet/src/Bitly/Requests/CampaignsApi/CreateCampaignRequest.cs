using Bitly.Models;

namespace Bitly.Requests.CampaignsApi;

/// <summary>
/// The inputs of the CreateCampaign operation.
/// </summary>
public sealed record CreateCampaignRequest
{
    public required CampaignModify Body { get; init; }
}
