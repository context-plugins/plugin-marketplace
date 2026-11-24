using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Current node status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1DoiTCloudFlowApi>))]
public sealed record Status1DoiTCloudFlowApi : OpenStringEnum<Status1DoiTCloudFlowApi>
{
    private Status1DoiTCloudFlowApi(string value) : base(value)
    {
    }

    public static readonly Status1DoiTCloudFlowApi Pending = new("pending");

    public static readonly Status1DoiTCloudFlowApi InProgress = new("in-progress");

    public static readonly Status1DoiTCloudFlowApi Complete = new("complete");

    public static readonly Status1DoiTCloudFlowApi CompletedWithErrors = new("completed-with-errors");

    public static readonly Status1DoiTCloudFlowApi Failed = new("failed");

    public static readonly Status1DoiTCloudFlowApi Rejected = new("rejected");

    public static readonly Status1DoiTCloudFlowApi ApprovalTimedOut = new("approval-timed-out");

    public static readonly Status1DoiTCloudFlowApi PendingApproval = new("pending-approval");

    public static readonly Status1DoiTCloudFlowApi Sleeping = new("sleeping");

    public static readonly Status1DoiTCloudFlowApi Skipped = new("skipped");

    public static readonly Status1DoiTCloudFlowApi Stopped = new("stopped");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onInProgress,
        Func<TResult> onComplete,
        Func<TResult> onCompletedWithErrors,
        Func<TResult> onFailed,
        Func<TResult> onRejected,
        Func<TResult> onApprovalTimedOut,
        Func<TResult> onPendingApproval,
        Func<TResult> onSleeping,
        Func<TResult> onSkipped,
        Func<TResult> onStopped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == InProgress => onInProgress(),
            _ when this == Complete => onComplete(),
            _ when this == CompletedWithErrors => onCompletedWithErrors(),
            _ when this == Failed => onFailed(),
            _ when this == Rejected => onRejected(),
            _ when this == ApprovalTimedOut => onApprovalTimedOut(),
            _ when this == PendingApproval => onPendingApproval(),
            _ when this == Sleeping => onSleeping(),
            _ when this == Skipped => onSkipped(),
            _ when this == Stopped => onStopped(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onInProgress,
        Action onComplete,
        Action onCompletedWithErrors,
        Action onFailed,
        Action onRejected,
        Action onApprovalTimedOut,
        Action onPendingApproval,
        Action onSleeping,
        Action onSkipped,
        Action onStopped,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == InProgress) onInProgress();
        else if (this == Complete) onComplete();
        else if (this == CompletedWithErrors) onCompletedWithErrors();
        else if (this == Failed) onFailed();
        else if (this == Rejected) onRejected();
        else if (this == ApprovalTimedOut) onApprovalTimedOut();
        else if (this == PendingApproval) onPendingApproval();
        else if (this == Sleeping) onSleeping();
        else if (this == Skipped) onSkipped();
        else if (this == Stopped) onStopped();
        else otherwise(Value);
    }
}
