using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;
using PrismaReviews.Models.Enums;

namespace PrismaReviews.Models;

/// <summary>
/// The business reply to a review.
/// </summary>
public record ReplyPrismaReviewsRepliesApi
{
    /// <summary>
    /// Reply text.
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    /// <summary>
    /// When the reply was published. <c>null</c> while a first reply is queued; when a reply is replaced, it keeps the previous value until the new one is published.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// <c>published</c> (live on the platform, whoever wrote it), <c>queued</c> (sent through Prisma, waiting to be published), <c>failed</c> (the platform refused it; see <c>error</c>) or <c>unknown</c> (the request went out but the platform never answered and the reply can't be read back, so Prisma didn't retry; check the review on the platform before posting again; see <c>error</c>).
    /// </summary>
    [JsonPropertyName("status")]
    public required StatusPrismaReviewsRepliesApi? Status { get; init; }

    /// <summary>
    /// Why publishing failed, when <c>status</c> is <c>failed</c>.
    /// </summary>
    [JsonPropertyName("error")]
    public required string? Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
