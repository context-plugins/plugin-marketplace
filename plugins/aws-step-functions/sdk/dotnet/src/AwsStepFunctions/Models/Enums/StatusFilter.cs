using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

/// <summary>
/// If specified, only list the executions whose current execution status matches the given filter. If you provide a PENDING_REDRIVE statusFilter, you must specify mapRunArn. For more information, see Child workflow execution redrive behaviour in the Step Functions Developer Guide. If you provide a stateMachineArn and a PENDING_REDRIVE statusFilter, the API returns a validation exception.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusFilter>))]
public sealed record StatusFilter : OpenStringEnum<StatusFilter>
{
    private StatusFilter(string value) : base(value)
    {
    }

    public static readonly StatusFilter Running = new("RUNNING");

    public static readonly StatusFilter Succeeded = new("SUCCEEDED");

    public static readonly StatusFilter Failed = new("FAILED");

    public static readonly StatusFilter TimedOut = new("TIMED_OUT");

    public static readonly StatusFilter Aborted = new("ABORTED");

    public static readonly StatusFilter PendingRedrive = new("PENDING_REDRIVE");

    public TResult Match<TResult>(Func<TResult> onRunning,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<TResult> onTimedOut,
        Func<TResult> onAborted,
        Func<TResult> onPendingRedrive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Running => onRunning(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ when this == TimedOut => onTimedOut(),
            _ when this == Aborted => onAborted(),
            _ when this == PendingRedrive => onPendingRedrive(),
            _ => otherwise(Value)
        };

    public void Match(Action onRunning,
        Action onSucceeded,
        Action onFailed,
        Action onTimedOut,
        Action onAborted,
        Action onPendingRedrive,
        Action<string> otherwise)
    {
        if (this == Running) onRunning();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else if (this == TimedOut) onTimedOut();
        else if (this == Aborted) onAborted();
        else if (this == PendingRedrive) onPendingRedrive();
        else otherwise(Value);
    }
}
