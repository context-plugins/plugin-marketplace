using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// The pull request's current status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State1BitbucketPullrequestsApi>))]
public sealed record State1BitbucketPullrequestsApi : OpenStringEnum<State1BitbucketPullrequestsApi>
{
    private State1BitbucketPullrequestsApi(string value) : base(value)
    {
    }

    public static readonly State1BitbucketPullrequestsApi Open = new("OPEN");

    public static readonly State1BitbucketPullrequestsApi Draft = new("DRAFT");

    public static readonly State1BitbucketPullrequestsApi Queued = new("QUEUED");

    public static readonly State1BitbucketPullrequestsApi Merged = new("MERGED");

    public static readonly State1BitbucketPullrequestsApi Declined = new("DECLINED");

    public static readonly State1BitbucketPullrequestsApi Superseded = new("SUPERSEDED");

    public TResult Match<TResult>(Func<TResult> onOpen,
        Func<TResult> onDraft,
        Func<TResult> onQueued,
        Func<TResult> onMerged,
        Func<TResult> onDeclined,
        Func<TResult> onSuperseded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == Draft => onDraft(),
            _ when this == Queued => onQueued(),
            _ when this == Merged => onMerged(),
            _ when this == Declined => onDeclined(),
            _ when this == Superseded => onSuperseded(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen,
        Action onDraft,
        Action onQueued,
        Action onMerged,
        Action onDeclined,
        Action onSuperseded,
        Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == Draft) onDraft();
        else if (this == Queued) onQueued();
        else if (this == Merged) onMerged();
        else if (this == Declined) onDeclined();
        else if (this == Superseded) onSuperseded();
        else otherwise(Value);
    }
}
