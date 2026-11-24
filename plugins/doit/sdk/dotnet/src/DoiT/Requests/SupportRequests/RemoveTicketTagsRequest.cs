using DoiT.Models;

namespace DoiT.Requests.SupportRequests;

/// <summary>
/// The inputs of the RemoveTicketTags operation.
/// </summary>
public sealed record RemoveTicketTagsRequest
{
    /// <summary>
    /// The unique identifier of the support request.
    /// </summary>
    public required long TicketId { get; init; }

    public required TagsRequest Body { get; init; }
}
