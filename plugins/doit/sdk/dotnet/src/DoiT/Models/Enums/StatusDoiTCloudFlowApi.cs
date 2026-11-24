using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusDoiTCloudFlowApi>))]
public sealed record StatusDoiTCloudFlowApi : OpenStringEnum<StatusDoiTCloudFlowApi>
{
    private StatusDoiTCloudFlowApi(string value) : base(value)
    {
    }

    public static readonly StatusDoiTCloudFlowApi Pending = new("pending");

    public static readonly StatusDoiTCloudFlowApi Running = new("running");

    public static readonly StatusDoiTCloudFlowApi Complete = new("complete");

    public static readonly StatusDoiTCloudFlowApi CompletedWithErrors = new("completed-with-errors");

    public static readonly StatusDoiTCloudFlowApi PendingApproval = new("pending-approval");

    public static readonly StatusDoiTCloudFlowApi Failed = new("failed");

    public static readonly StatusDoiTCloudFlowApi Sleeping = new("sleeping");

    public static readonly StatusDoiTCloudFlowApi Stopped = new("stopped");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onRunning,
        Func<TResult> onComplete,
        Func<TResult> onCompletedWithErrors,
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
            _ when this == CompletedWithErrors => onCompletedWithErrors(),
            _ when this == PendingApproval => onPendingApproval(),
            _ when this == Failed => onFailed(),
            _ when this == Sleeping => onSleeping(),
            _ when this == Stopped => onStopped(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onRunning,
        Action onComplete,
        Action onCompletedWithErrors,
        Action onPendingApproval,
        Action onFailed,
        Action onSleeping,
        Action onStopped,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Running) onRunning();
        else if (this == Complete) onComplete();
        else if (this == CompletedWithErrors) onCompletedWithErrors();
        else if (this == PendingApproval) onPendingApproval();
        else if (this == Failed) onFailed();
        else if (this == Sleeping) onSleeping();
        else if (this == Stopped) onStopped();
        else otherwise(Value);
    }
}
