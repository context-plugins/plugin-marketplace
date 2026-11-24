using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status31>))]
public sealed record Status31 : OpenStringEnum<Status31>
{
    private Status31(string value) : base(value)
    {
    }

    public static readonly Status31 Queued = new("QUEUED");

    public static readonly Status31 Running = new("RUNNING");

    public static readonly Status31 Completed = new("COMPLETED");

    public static readonly Status31 Failed = new("FAILED");

    public static readonly Status31 Canceled = new("CANCELED");

    public static readonly Status31 Skipped = new("SKIPPED");

    public TResult Match<TResult>(Func<TResult> onQueued,
        Func<TResult> onRunning,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<TResult> onCanceled,
        Func<TResult> onSkipped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ when this == Running => onRunning(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ when this == Canceled => onCanceled(),
            _ when this == Skipped => onSkipped(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued,
        Action onRunning,
        Action onCompleted,
        Action onFailed,
        Action onCanceled,
        Action onSkipped,
        Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else if (this == Running) onRunning();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else if (this == Canceled) onCanceled();
        else if (this == Skipped) onSkipped();
        else otherwise(Value);
    }
}
