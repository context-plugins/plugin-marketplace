using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Enum;

namespace AwsXRay.Models.Enums;

/// <summary>
/// Status of the retrieval.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RetrievalStatus>))]
public sealed record RetrievalStatus : OpenStringEnum<RetrievalStatus>
{
    private RetrievalStatus(string value) : base(value)
    {
    }

    public static readonly RetrievalStatus Scheduled = new("SCHEDULED");

    public static readonly RetrievalStatus Running = new("RUNNING");

    public static readonly RetrievalStatus Complete = new("COMPLETE");

    public static readonly RetrievalStatus Failed = new("FAILED");

    public static readonly RetrievalStatus Cancelled = new("CANCELLED");

    public static readonly RetrievalStatus Timeout = new("TIMEOUT");

    public TResult Match<TResult>(Func<TResult> onScheduled,
        Func<TResult> onRunning,
        Func<TResult> onComplete,
        Func<TResult> onFailed,
        Func<TResult> onCancelled,
        Func<TResult> onTimeout,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Scheduled => onScheduled(),
            _ when this == Running => onRunning(),
            _ when this == Complete => onComplete(),
            _ when this == Failed => onFailed(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Timeout => onTimeout(),
            _ => otherwise(Value)
        };

    public void Match(Action onScheduled,
        Action onRunning,
        Action onComplete,
        Action onFailed,
        Action onCancelled,
        Action onTimeout,
        Action<string> otherwise)
    {
        if (this == Scheduled) onScheduled();
        else if (this == Running) onRunning();
        else if (this == Complete) onComplete();
        else if (this == Failed) onFailed();
        else if (this == Cancelled) onCancelled();
        else if (this == Timeout) onTimeout();
        else otherwise(Value);
    }
}
