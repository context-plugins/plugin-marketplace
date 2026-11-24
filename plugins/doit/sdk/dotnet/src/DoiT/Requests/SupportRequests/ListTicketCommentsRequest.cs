namespace DoiT.Requests.SupportRequests;

/// <summary>
/// The inputs of the ListTicketComments operation.
/// </summary>
public sealed record ListTicketCommentsRequest
{
    /// <summary>
    /// The unique identifier of the support request.
    /// </summary>
    public required long TicketId { get; init; }
}
