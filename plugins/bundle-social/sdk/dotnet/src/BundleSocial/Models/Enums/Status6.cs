using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status6>))]
public sealed record Status6 : OpenStringEnum<Status6>
{
    private Status6(string value) : base(value)
    {
    }

    public static readonly Status6 Pending = new("PENDING");

    public static readonly Status6 FetchingRecommendations = new("FETCHING_RECOMMENDATIONS");

    public static readonly Status6 Completed = new("COMPLETED");

    public static readonly Status6 Failed = new("FAILED");

    public static readonly Status6 RateLimited = new("RATE_LIMITED");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onFetchingRecommendations,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<TResult> onRateLimited,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == FetchingRecommendations => onFetchingRecommendations(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ when this == RateLimited => onRateLimited(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onFetchingRecommendations,
        Action onCompleted,
        Action onFailed,
        Action onRateLimited,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == FetchingRecommendations) onFetchingRecommendations();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else if (this == RateLimited) onRateLimited();
        else otherwise(Value);
    }
}
