namespace DoiT.Requests.SupportRequests;

/// <summary>
/// The inputs of the GetTicket operation.
/// </summary>
public sealed record GetTicketRequest
{
    /// <summary>
    /// The unique identifier of the support request.
    /// </summary>
    public required long TicketId { get; init; }
}
