using DoiT.Models;

namespace DoiT.Requests.SupportRequests;

/// <summary>
/// The inputs of the AddTicketTags operation.
/// </summary>
public sealed record AddTicketTagsRequest
{
    /// <summary>
    /// The unique identifier of the support request.
    /// </summary>
    public required long TicketId { get; init; }

    public required TagsRequest Body { get; init; }
}
