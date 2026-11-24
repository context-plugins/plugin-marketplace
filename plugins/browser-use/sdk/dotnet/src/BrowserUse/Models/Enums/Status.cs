using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Enum;

namespace BrowserUse.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Queued = new("queued");

    public static readonly Status Dispatching = new("dispatching");

    public static readonly Status Running = new("running");

    public static readonly Status Completed = new("completed");

    public static readonly Status Failed = new("failed");

    public static readonly Status Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onQueued,
        Func<TResult> onDispatching,
        Func<TResult> onRunning,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ when this == Dispatching => onDispatching(),
            _ when this == Running => onRunning(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued,
        Action onDispatching,
        Action onRunning,
        Action onCompleted,
        Action onFailed,
        Action onCancelled,
        Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else if (this == Dispatching) onDispatching();
        else if (this == Running) onRunning();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
