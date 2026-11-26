using Justtrack.Models;

namespace Justtrack.Requests.Campaigns;

/// <summary>
/// The inputs of the PostManagementV1Campaign operation.
/// </summary>
public sealed record PostManagementV1CampaignRequest
{
    public CreateCampaignRequest? Body { get; init; }
}
