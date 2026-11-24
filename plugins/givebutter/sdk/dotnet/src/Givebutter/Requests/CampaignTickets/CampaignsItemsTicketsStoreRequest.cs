using Givebutter.Models;

namespace Givebutter.Requests.CampaignTickets;

/// <summary>
/// The inputs of the CampaignsItemsTicketsStore operation.
/// </summary>
public sealed record CampaignsItemsTicketsStoreRequest
{
    /// <summary>
    /// The campaign ID
    /// </summary>
    public required int Campaign { get; init; }

    public required StoreCampaignItemTicketRequest Body { get; init; }
}
