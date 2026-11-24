using JuriSign.Models;

namespace JuriSign.Requests.Bulk;

/// <summary>
/// The inputs of the CreateBulkCampaign operation.
/// </summary>
public sealed record CreateBulkCampaignRequest
{
    public required BulkCampaignsRequest Body { get; init; }
}
