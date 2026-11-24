using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<JobStatus>))]
public sealed record JobStatus : OpenStringEnum<JobStatus>
{
    private JobStatus(string value) : base(value)
    {
    }

    public static readonly JobStatus Pending = new("pending");

    public static readonly JobStatus Running = new("running");

    public static readonly JobStatus Completed = new("completed");

    public static readonly JobStatus Error = new("error");

    public static readonly JobStatus Cancelling = new("cancelling");

    public static readonly JobStatus Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onRunning,
        Func<TResult> onCompleted,
        Func<TResult> onError,
        Func<TResult> onCancelling,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Running => onRunning(),
            _ when this == Completed => onCompleted(),
            _ when this == Error => onError(),
            _ when this == Cancelling => onCancelling(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onRunning,
        Action onCompleted,
        Action onError,
        Action onCancelling,
        Action onCancelled,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Running) onRunning();
        else if (this == Completed) onCompleted();
        else if (this == Error) onError();
        else if (this == Cancelling) onCancelling();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
