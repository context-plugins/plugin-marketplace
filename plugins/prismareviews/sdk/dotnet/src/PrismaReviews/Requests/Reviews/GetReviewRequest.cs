namespace PrismaReviews.Requests.Reviews;

/// <summary>
/// The inputs of the GetReview operation.
/// </summary>
public sealed record GetReviewRequest
{
    /// <summary>
    /// Review ID (<c>rev_…</c>).
    /// </summary>
    public required string Id { get; init; }
}
