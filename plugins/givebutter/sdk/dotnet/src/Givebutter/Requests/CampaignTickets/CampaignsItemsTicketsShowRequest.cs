namespace Givebutter.Requests.CampaignTickets;

/// <summary>
/// The inputs of the CampaignsItemsTicketsShow operation.
/// </summary>
public sealed record CampaignsItemsTicketsShowRequest
{
    /// <summary>
    /// The campaign ID
    /// </summary>
    public required int Campaign { get; init; }

    public required int TicketId { get; init; }
}
