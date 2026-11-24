using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Enum;

namespace PrismaReviews.Models.Enums;

/// <summary>
/// <c>published</c> (live on the platform, whoever wrote it), <c>queued</c> (sent through Prisma, waiting to be published), <c>failed</c> (the platform refused it; see <c>error</c>) or <c>unknown</c> (the request went out but the platform never answered and the reply can't be read back, so Prisma didn't retry; check the review on the platform before posting again; see <c>error</c>).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusPrismaReviewsRepliesApi>))]
public sealed record StatusPrismaReviewsRepliesApi : OpenStringEnum<StatusPrismaReviewsRepliesApi>
{
    private StatusPrismaReviewsRepliesApi(string value) : base(value)
    {
    }

    public static readonly StatusPrismaReviewsRepliesApi Published = new("published");

    public static readonly StatusPrismaReviewsRepliesApi Queued = new("queued");

    public static readonly StatusPrismaReviewsRepliesApi Failed = new("failed");

    public static readonly StatusPrismaReviewsRepliesApi Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onPublished,
        Func<TResult> onQueued,
        Func<TResult> onFailed,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Published => onPublished(),
            _ when this == Queued => onQueued(),
            _ when this == Failed => onFailed(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onPublished, Action onQueued, Action onFailed, Action onUnknown, Action<string> otherwise)
    {
        if (this == Published) onPublished();
        else if (this == Queued) onQueued();
        else if (this == Failed) onFailed();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
