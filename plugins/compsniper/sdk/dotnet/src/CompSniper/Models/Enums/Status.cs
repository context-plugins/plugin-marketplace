using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Queued = new("queued");

    public static readonly Status Running = new("running");

    public static readonly Status Done = new("done");

    public static readonly Status Partial = new("partial");

    public static readonly Status Cancelled = new("cancelled");

    public static readonly Status Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onQueued,
        Func<TResult> onRunning,
        Func<TResult> onDone,
        Func<TResult> onPartial,
        Func<TResult> onCancelled,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ when this == Running => onRunning(),
            _ when this == Done => onDone(),
            _ when this == Partial => onPartial(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued,
        Action onRunning,
        Action onDone,
        Action onPartial,
        Action onCancelled,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else if (this == Running) onRunning();
        else if (this == Done) onDone();
        else if (this == Partial) onPartial();
        else if (this == Cancelled) onCancelled();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
