using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<LastExecutionStatus>))]
public sealed record LastExecutionStatus : OpenStringEnum<LastExecutionStatus>
{
    private LastExecutionStatus(string value) : base(value)
    {
    }

    public static readonly LastExecutionStatus Pending = new("pending");

    public static readonly LastExecutionStatus Running = new("running");

    public static readonly LastExecutionStatus Complete = new("complete");

    public static readonly LastExecutionStatus PendingApproval = new("pending-approval");

    public static readonly LastExecutionStatus Failed = new("failed");

    public static readonly LastExecutionStatus Sleeping = new("sleeping");

    public static readonly LastExecutionStatus Stopped = new("stopped");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onRunning,
        Func<TResult> onComplete,
        Func<TResult> onPendingApproval,
        Func<TResult> onFailed,
        Func<TResult> onSleeping,
        Func<TResult> onStopped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Running => onRunning(),
            _ when this == Complete => onComplete(),
            _ when this == PendingApproval => onPendingApproval(),
            _ when this == Failed => onFailed(),
            _ when this == Sleeping => onSleeping(),
            _ when this == Stopped => onStopped(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onRunning,
        Action onComplete,
        Action onPendingApproval,
        Action onFailed,
        Action onSleeping,
        Action onStopped,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Running) onRunning();
        else if (this == Complete) onComplete();
        else if (this == PendingApproval) onPendingApproval();
        else if (this == Failed) onFailed();
        else if (this == Sleeping) onSleeping();
        else if (this == Stopped) onStopped();
        else otherwise(Value);
    }
}
