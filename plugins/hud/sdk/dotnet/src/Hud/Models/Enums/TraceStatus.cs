using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TraceStatus>))]
public sealed record TraceStatus : OpenStringEnum<TraceStatus>
{
    private TraceStatus(string value) : base(value)
    {
    }

    public static readonly TraceStatus Pending = new("pending");

    public static readonly TraceStatus Initializing = new("initializing");

    public static readonly TraceStatus Running = new("running");

    public static readonly TraceStatus Completed = new("completed");

    public static readonly TraceStatus Error = new("error");

    public static readonly TraceStatus Cancelling = new("cancelling");

    public static readonly TraceStatus Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onInitializing,
        Func<TResult> onRunning,
        Func<TResult> onCompleted,
        Func<TResult> onError,
        Func<TResult> onCancelling,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Initializing => onInitializing(),
            _ when this == Running => onRunning(),
            _ when this == Completed => onCompleted(),
            _ when this == Error => onError(),
            _ when this == Cancelling => onCancelling(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onInitializing,
        Action onRunning,
        Action onCompleted,
        Action onError,
        Action onCancelling,
        Action onCancelled,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Initializing) onInitializing();
        else if (this == Running) onRunning();
        else if (this == Completed) onCompleted();
        else if (this == Error) onError();
        else if (this == Cancelling) onCancelling();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
