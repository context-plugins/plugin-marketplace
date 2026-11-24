using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

/// <summary>
/// <c>stopped</c>: the importer refused the bundle or stopped partway, and its report says why; <c>failed</c>: the import did not run to an outcome
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Queued = new("queued");

    public static readonly Status1 Starting = new("starting");

    public static readonly Status1 Running = new("running");

    public static readonly Status1 Cancelling = new("cancelling");

    public static readonly Status1 Completed = new("completed");

    public static readonly Status1 Stopped = new("stopped");

    public static readonly Status1 Failed = new("failed");

    public static readonly Status1 Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onQueued,
        Func<TResult> onStarting,
        Func<TResult> onRunning,
        Func<TResult> onCancelling,
        Func<TResult> onCompleted,
        Func<TResult> onStopped,
        Func<TResult> onFailed,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ when this == Starting => onStarting(),
            _ when this == Running => onRunning(),
            _ when this == Cancelling => onCancelling(),
            _ when this == Completed => onCompleted(),
            _ when this == Stopped => onStopped(),
            _ when this == Failed => onFailed(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued,
        Action onStarting,
        Action onRunning,
        Action onCancelling,
        Action onCompleted,
        Action onStopped,
        Action onFailed,
        Action onCancelled,
        Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else if (this == Starting) onStarting();
        else if (this == Running) onRunning();
        else if (this == Cancelling) onCancelling();
        else if (this == Completed) onCompleted();
        else if (this == Stopped) onStopped();
        else if (this == Failed) onFailed();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
