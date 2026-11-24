using Applike.Models;

namespace Applike.Requests.Campaigns;

/// <summary>
/// The inputs of the PostManagementV1Campaigns operation.
/// </summary>
public sealed record PostManagementV1CampaignsRequest
{
    public ListCampaignsRequest? Body { get; init; }
}
