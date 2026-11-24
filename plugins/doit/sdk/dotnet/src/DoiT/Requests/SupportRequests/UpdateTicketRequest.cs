using DoiT.Models;

namespace DoiT.Requests.SupportRequests;

/// <summary>
/// The inputs of the UpdateTicket operation.
/// </summary>
public sealed record UpdateTicketRequest
{
    /// <summary>
    /// The unique identifier of the support request.
    /// </summary>
    public required long TicketId { get; init; }

    public required SupportV1TicketsRequest Body { get; init; }
}
