using System;
using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Enum;

namespace MicrosoftDynamicsNav.Models.Enums;

/// <summary>
/// Status of the operation
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Queued = new("Queued");

    public static readonly Status Scheduled = new("Scheduled");

    public static readonly Status Running = new("Running");

    public static readonly Status Succeeded = new("Succeeded");

    public static readonly Status Failed = new("Failed");

    public static readonly Status Canceled = new("Canceled");

    public static readonly Status Skipped = new("Skipped");

    public TResult Match<TResult>(Func<TResult> onQueued,
        Func<TResult> onScheduled,
        Func<TResult> onRunning,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<TResult> onCanceled,
        Func<TResult> onSkipped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ when this == Scheduled => onScheduled(),
            _ when this == Running => onRunning(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ when this == Canceled => onCanceled(),
            _ when this == Skipped => onSkipped(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued,
        Action onScheduled,
        Action onRunning,
        Action onSucceeded,
        Action onFailed,
        Action onCanceled,
        Action onSkipped,
        Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else if (this == Scheduled) onScheduled();
        else if (this == Running) onRunning();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else if (this == Canceled) onCanceled();
        else if (this == Skipped) onSkipped();
        else otherwise(Value);
    }
}
