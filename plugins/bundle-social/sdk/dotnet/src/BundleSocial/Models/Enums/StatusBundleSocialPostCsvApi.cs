using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusBundleSocialPostCsvApi>))]
public sealed record StatusBundleSocialPostCsvApi : OpenStringEnum<StatusBundleSocialPostCsvApi>
{
    private StatusBundleSocialPostCsvApi(string value) : base(value)
    {
    }

    public static readonly StatusBundleSocialPostCsvApi Pending = new("PENDING");

    public static readonly StatusBundleSocialPostCsvApi Processing = new("PROCESSING");

    public static readonly StatusBundleSocialPostCsvApi Completed = new("COMPLETED");

    public static readonly StatusBundleSocialPostCsvApi CompletedWithErrors = new("COMPLETED_WITH_ERRORS");

    public static readonly StatusBundleSocialPostCsvApi Failed = new("FAILED");

    public static readonly StatusBundleSocialPostCsvApi RateLimited = new("RATE_LIMITED");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onProcessing,
        Func<TResult> onCompleted,
        Func<TResult> onCompletedWithErrors,
        Func<TResult> onFailed,
        Func<TResult> onRateLimited,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Processing => onProcessing(),
            _ when this == Completed => onCompleted(),
            _ when this == CompletedWithErrors => onCompletedWithErrors(),
            _ when this == Failed => onFailed(),
            _ when this == RateLimited => onRateLimited(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onProcessing,
        Action onCompleted,
        Action onCompletedWithErrors,
        Action onFailed,
        Action onRateLimited,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Processing) onProcessing();
        else if (this == Completed) onCompleted();
        else if (this == CompletedWithErrors) onCompletedWithErrors();
        else if (this == Failed) onFailed();
        else if (this == RateLimited) onRateLimited();
        else otherwise(Value);
    }
}
