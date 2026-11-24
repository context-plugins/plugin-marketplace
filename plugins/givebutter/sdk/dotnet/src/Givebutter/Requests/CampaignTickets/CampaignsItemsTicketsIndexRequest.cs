namespace Givebutter.Requests.CampaignTickets;

/// <summary>
/// The inputs of the CampaignsItemsTicketsIndex operation.
/// </summary>
public sealed record CampaignsItemsTicketsIndexRequest
{
    /// <summary>
    /// The campaign ID
    /// </summary>
    public required int Campaign { get; init; }
}
