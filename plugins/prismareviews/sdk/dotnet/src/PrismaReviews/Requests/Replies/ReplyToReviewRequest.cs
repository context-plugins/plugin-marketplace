using PrismaReviews.Models;

namespace PrismaReviews.Requests.Replies;

/// <summary>
/// The inputs of the ReplyToReview operation.
/// </summary>
public sealed record ReplyToReviewRequest
{
    /// <summary>
    /// Review ID (<c>rev_…</c>).
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// A unique value per reply (a UUID works). The same key with the same request returns the stored response instead of replying twice; with a different request it returns <c>409 idempotency_conflict</c>. Scoped to the workspace; only successful responses are stored.
    /// </summary>
    public string? IdempotencyKey { get; init; }

    public required V1ReviewsReplyRequest Body { get; init; }
}
