using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusBundleSocialCommentApi>))]
public sealed record StatusBundleSocialCommentApi : OpenStringEnum<StatusBundleSocialCommentApi>
{
    private StatusBundleSocialCommentApi(string value) : base(value)
    {
    }

    public static readonly StatusBundleSocialCommentApi Pending = new("PENDING");

    public static readonly StatusBundleSocialCommentApi Fetching = new("FETCHING");

    public static readonly StatusBundleSocialCommentApi Retrying = new("RETRYING");

    public static readonly StatusBundleSocialCommentApi Completed = new("COMPLETED");

    public static readonly StatusBundleSocialCommentApi Skipped = new("SKIPPED");

    public static readonly StatusBundleSocialCommentApi Failed = new("FAILED");

    public static readonly StatusBundleSocialCommentApi RateLimited = new("RATE_LIMITED");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onFetching,
        Func<TResult> onRetrying,
        Func<TResult> onCompleted,
        Func<TResult> onSkipped,
        Func<TResult> onFailed,
        Func<TResult> onRateLimited,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Fetching => onFetching(),
            _ when this == Retrying => onRetrying(),
            _ when this == Completed => onCompleted(),
            _ when this == Skipped => onSkipped(),
            _ when this == Failed => onFailed(),
            _ when this == RateLimited => onRateLimited(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onFetching,
        Action onRetrying,
        Action onCompleted,
        Action onSkipped,
        Action onFailed,
        Action onRateLimited,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Fetching) onFetching();
        else if (this == Retrying) onRetrying();
        else if (this == Completed) onCompleted();
        else if (this == Skipped) onSkipped();
        else if (this == Failed) onFailed();
        else if (this == RateLimited) onRateLimited();
        else otherwise(Value);
    }
}
