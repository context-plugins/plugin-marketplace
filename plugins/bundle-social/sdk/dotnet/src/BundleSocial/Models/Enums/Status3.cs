using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status3>))]
public sealed record Status3 : OpenStringEnum<Status3>
{
    private Status3(string value) : base(value)
    {
    }

    public static readonly Status3 Pending = new("PENDING");

    public static readonly Status3 FetchingReviews = new("FETCHING_REVIEWS");

    public static readonly Status3 Completed = new("COMPLETED");

    public static readonly Status3 Failed = new("FAILED");

    public static readonly Status3 RateLimited = new("RATE_LIMITED");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onFetchingReviews,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<TResult> onRateLimited,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == FetchingReviews => onFetchingReviews(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ when this == RateLimited => onRateLimited(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onFetchingReviews,
        Action onCompleted,
        Action onFailed,
        Action onRateLimited,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == FetchingReviews) onFetchingReviews();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else if (this == RateLimited) onRateLimited();
        else otherwise(Value);
    }
}
