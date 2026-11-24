using System;
using System.Text.Json.Serialization;
using Zillapi.Core.Enum;

namespace Zillapi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusZillapiZillowPropertyDataJobsApi>))]
public sealed record StatusZillapiZillowPropertyDataJobsApi : OpenStringEnum<StatusZillapiZillowPropertyDataJobsApi>
{
    private StatusZillapiZillowPropertyDataJobsApi(string value) : base(value)
    {
    }

    public static readonly StatusZillapiZillowPropertyDataJobsApi Queued = new("queued");

    public static readonly StatusZillapiZillowPropertyDataJobsApi Running = new("running");

    public static readonly StatusZillapiZillowPropertyDataJobsApi Succeeded = new("succeeded");

    public static readonly StatusZillapiZillowPropertyDataJobsApi Failed = new("failed");

    public static readonly StatusZillapiZillowPropertyDataJobsApi TimedOut = new("timed_out");

    public static readonly StatusZillapiZillowPropertyDataJobsApi Aborted = new("aborted");

    public TResult Match<TResult>(Func<TResult> onQueued,
        Func<TResult> onRunning,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<TResult> onTimedOut,
        Func<TResult> onAborted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ when this == Running => onRunning(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ when this == TimedOut => onTimedOut(),
            _ when this == Aborted => onAborted(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued,
        Action onRunning,
        Action onSucceeded,
        Action onFailed,
        Action onTimedOut,
        Action onAborted,
        Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else if (this == Running) onRunning();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else if (this == TimedOut) onTimedOut();
        else if (this == Aborted) onAborted();
        else otherwise(Value);
    }
}
