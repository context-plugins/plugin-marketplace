namespace PrismaReviews.Requests.Replies;

/// <summary>
/// The inputs of the DeleteReply operation.
/// </summary>
public sealed record DeleteReplyRequest
{
    /// <summary>
    /// Review ID (<c>rev_…</c>).
    /// </summary>
    public required string Id { get; init; }
}
