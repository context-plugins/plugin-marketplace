using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<QaResultStatus>))]
public sealed record QaResultStatus : OpenStringEnum<QaResultStatus>
{
    private QaResultStatus(string value) : base(value)
    {
    }

    public static readonly QaResultStatus Queued = new("queued");

    public static readonly QaResultStatus Running = new("running");

    public static readonly QaResultStatus Cancelling = new("cancelling");

    public static readonly QaResultStatus Completed = new("completed");

    public static readonly QaResultStatus Error = new("error");

    public static readonly QaResultStatus Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onQueued,
        Func<TResult> onRunning,
        Func<TResult> onCancelling,
        Func<TResult> onCompleted,
        Func<TResult> onError,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ when this == Running => onRunning(),
            _ when this == Cancelling => onCancelling(),
            _ when this == Completed => onCompleted(),
            _ when this == Error => onError(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued,
        Action onRunning,
        Action onCancelling,
        Action onCompleted,
        Action onError,
        Action onCancelled,
        Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else if (this == Running) onRunning();
        else if (this == Cancelling) onCancelling();
        else if (this == Completed) onCompleted();
        else if (this == Error) onError();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
