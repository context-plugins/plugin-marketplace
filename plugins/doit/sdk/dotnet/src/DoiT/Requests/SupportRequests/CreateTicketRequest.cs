using DoiT.Models;

namespace DoiT.Requests.SupportRequests;

/// <summary>
/// The inputs of the CreateTicket operation.
/// </summary>
public sealed record CreateTicketRequest
{
    public required TicketCreateFormExtApi Body { get; init; }
}
