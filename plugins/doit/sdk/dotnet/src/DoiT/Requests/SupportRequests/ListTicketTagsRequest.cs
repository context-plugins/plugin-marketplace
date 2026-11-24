namespace DoiT.Requests.SupportRequests;

/// <summary>
/// The inputs of the ListTicketTags operation.
/// </summary>
public sealed record ListTicketTagsRequest
{
    /// <summary>
    /// The unique identifier of the support request.
    /// </summary>
    public required long TicketId { get; init; }
}
