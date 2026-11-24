using DoiT.Models;

namespace DoiT.Requests.SupportRequests;

/// <summary>
/// The inputs of the CreateTicketComment operation.
/// </summary>
public sealed record CreateTicketCommentRequest
{
    /// <summary>
    /// The unique identifier of the support request.
    /// </summary>
    public required long TicketId { get; init; }

    public required CreateCommentRequest Body { get; init; }
}
