using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusBundleSocialPostImportApi>))]
public sealed record StatusBundleSocialPostImportApi : OpenStringEnum<StatusBundleSocialPostImportApi>
{
    private StatusBundleSocialPostImportApi(string value) : base(value)
    {
    }

    public static readonly StatusBundleSocialPostImportApi Pending = new("PENDING");

    public static readonly StatusBundleSocialPostImportApi FetchingPosts = new("FETCHING_POSTS");

    public static readonly StatusBundleSocialPostImportApi FetchingAnalytics = new("FETCHING_ANALYTICS");

    public static readonly StatusBundleSocialPostImportApi Completed = new("COMPLETED");

    public static readonly StatusBundleSocialPostImportApi Failed = new("FAILED");

    public static readonly StatusBundleSocialPostImportApi RateLimited = new("RATE_LIMITED");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onFetchingPosts,
        Func<TResult> onFetchingAnalytics,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<TResult> onRateLimited,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == FetchingPosts => onFetchingPosts(),
            _ when this == FetchingAnalytics => onFetchingAnalytics(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ when this == RateLimited => onRateLimited(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onFetchingPosts,
        Action onFetchingAnalytics,
        Action onCompleted,
        Action onFailed,
        Action onRateLimited,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == FetchingPosts) onFetchingPosts();
        else if (this == FetchingAnalytics) onFetchingAnalytics();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else if (this == RateLimited) onRateLimited();
        else otherwise(Value);
    }
}
