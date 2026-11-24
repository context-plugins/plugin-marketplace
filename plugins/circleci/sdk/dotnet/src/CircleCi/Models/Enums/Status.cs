using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Enum;

namespace CircleCi.Models.Enums;

/// <summary>
/// The build status
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Retried = new("retried");

    public static readonly Status Canceled = new("canceled");

    public static readonly Status InfrastructureFail = new("infrastructure_fail");

    public static readonly Status Timedout = new("timedout");

    public static readonly Status NotRun = new("not_run");

    public static readonly Status Running = new("running");

    public static readonly Status Failed = new("failed");

    public static readonly Status Queued = new("queued");

    public static readonly Status Scheduled = new("scheduled");

    public static readonly Status NotRunning = new("not_running");

    public static readonly Status NoTests = new("no_tests");

    public static readonly Status Fixed = new("fixed");

    public static readonly Status Success = new("success");

    public TResult Match<TResult>(Func<TResult> onRetried,
        Func<TResult> onCanceled,
        Func<TResult> onInfrastructureFail,
        Func<TResult> onTimedout,
        Func<TResult> onNotRun,
        Func<TResult> onRunning,
        Func<TResult> onFailed,
        Func<TResult> onQueued,
        Func<TResult> onScheduled,
        Func<TResult> onNotRunning,
        Func<TResult> onNoTests,
        Func<TResult> onFixed,
        Func<TResult> onSuccess,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Retried => onRetried(),
            _ when this == Canceled => onCanceled(),
            _ when this == InfrastructureFail => onInfrastructureFail(),
            _ when this == Timedout => onTimedout(),
            _ when this == NotRun => onNotRun(),
            _ when this == Running => onRunning(),
            _ when this == Failed => onFailed(),
            _ when this == Queued => onQueued(),
            _ when this == Scheduled => onScheduled(),
            _ when this == NotRunning => onNotRunning(),
            _ when this == NoTests => onNoTests(),
            _ when this == Fixed => onFixed(),
            _ when this == Success => onSuccess(),
            _ => otherwise(Value)
        };

    public void Match(Action onRetried,
        Action onCanceled,
        Action onInfrastructureFail,
        Action onTimedout,
        Action onNotRun,
        Action onRunning,
        Action onFailed,
        Action onQueued,
        Action onScheduled,
        Action onNotRunning,
        Action onNoTests,
        Action onFixed,
        Action onSuccess,
        Action<string> otherwise)
    {
        if (this == Retried) onRetried();
        else if (this == Canceled) onCanceled();
        else if (this == InfrastructureFail) onInfrastructureFail();
        else if (this == Timedout) onTimedout();
        else if (this == NotRun) onNotRun();
        else if (this == Running) onRunning();
        else if (this == Failed) onFailed();
        else if (this == Queued) onQueued();
        else if (this == Scheduled) onScheduled();
        else if (this == NotRunning) onNotRunning();
        else if (this == NoTests) onNoTests();
        else if (this == Fixed) onFixed();
        else if (this == Success) onSuccess();
        else otherwise(Value);
    }
}
