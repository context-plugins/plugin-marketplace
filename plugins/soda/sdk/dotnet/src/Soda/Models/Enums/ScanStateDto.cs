using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ScanStateDto>))]
public sealed record ScanStateDto : OpenStringEnum<ScanStateDto>
{
    private ScanStateDto(string value) : base(value)
    {
    }

    public static readonly ScanStateDto Queuing = new("queuing");

    public static readonly ScanStateDto Executing = new("executing");

    public static readonly ScanStateDto Started = new("started");

    public static readonly ScanStateDto CancelationRequested = new("cancelationRequested");

    public static readonly ScanStateDto TimeOutRequested = new("timeOutRequested");

    public static readonly ScanStateDto Canceled = new("canceled");

    public static readonly ScanStateDto TimedOut = new("timedOut");

    public static readonly ScanStateDto Failed = new("failed");

    public static readonly ScanStateDto CompletedWithErrors = new("completedWithErrors");

    public static readonly ScanStateDto CompletedWithFailures = new("completedWithFailures");

    public static readonly ScanStateDto CompletedWithWarnings = new("completedWithWarnings");

    public static readonly ScanStateDto Completed = new("completed");

    public TResult Match<TResult>(Func<TResult> onQueuing,
        Func<TResult> onExecuting,
        Func<TResult> onStarted,
        Func<TResult> onCancelationRequested,
        Func<TResult> onTimeOutRequested,
        Func<TResult> onCanceled,
        Func<TResult> onTimedOut,
        Func<TResult> onFailed,
        Func<TResult> onCompletedWithErrors,
        Func<TResult> onCompletedWithFailures,
        Func<TResult> onCompletedWithWarnings,
        Func<TResult> onCompleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queuing => onQueuing(),
            _ when this == Executing => onExecuting(),
            _ when this == Started => onStarted(),
            _ when this == CancelationRequested => onCancelationRequested(),
            _ when this == TimeOutRequested => onTimeOutRequested(),
            _ when this == Canceled => onCanceled(),
            _ when this == TimedOut => onTimedOut(),
            _ when this == Failed => onFailed(),
            _ when this == CompletedWithErrors => onCompletedWithErrors(),
            _ when this == CompletedWithFailures => onCompletedWithFailures(),
            _ when this == CompletedWithWarnings => onCompletedWithWarnings(),
            _ when this == Completed => onCompleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueuing,
        Action onExecuting,
        Action onStarted,
        Action onCancelationRequested,
        Action onTimeOutRequested,
        Action onCanceled,
        Action onTimedOut,
        Action onFailed,
        Action onCompletedWithErrors,
        Action onCompletedWithFailures,
        Action onCompletedWithWarnings,
        Action onCompleted,
        Action<string> otherwise)
    {
        if (this == Queuing) onQueuing();
        else if (this == Executing) onExecuting();
        else if (this == Started) onStarted();
        else if (this == CancelationRequested) onCancelationRequested();
        else if (this == TimeOutRequested) onTimeOutRequested();
        else if (this == Canceled) onCanceled();
        else if (this == TimedOut) onTimedOut();
        else if (this == Failed) onFailed();
        else if (this == CompletedWithErrors) onCompletedWithErrors();
        else if (this == CompletedWithFailures) onCompletedWithFailures();
        else if (this == CompletedWithWarnings) onCompletedWithWarnings();
        else if (this == Completed) onCompleted();
        else otherwise(Value);
    }
}
