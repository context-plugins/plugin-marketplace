using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

/// <summary>
/// The status of the specified cache report.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CacheReportStatus>))]
public sealed record CacheReportStatus : OpenStringEnum<CacheReportStatus>
{
    private CacheReportStatus(string value) : base(value)
    {
    }

    public static readonly CacheReportStatus InProgress = new("IN_PROGRESS");

    public static readonly CacheReportStatus Completed = new("COMPLETED");

    public static readonly CacheReportStatus Canceled = new("CANCELED");

    public static readonly CacheReportStatus Failed = new("FAILED");

    public static readonly CacheReportStatus Error = new("ERROR");

    public TResult Match<TResult>(Func<TResult> onInProgress,
        Func<TResult> onCompleted,
        Func<TResult> onCanceled,
        Func<TResult> onFailed,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InProgress => onInProgress(),
            _ when this == Completed => onCompleted(),
            _ when this == Canceled => onCanceled(),
            _ when this == Failed => onFailed(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onInProgress,
        Action onCompleted,
        Action onCanceled,
        Action onFailed,
        Action onError,
        Action<string> otherwise)
    {
        if (this == InProgress) onInProgress();
        else if (this == Completed) onCompleted();
        else if (this == Canceled) onCanceled();
        else if (this == Failed) onFailed();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
