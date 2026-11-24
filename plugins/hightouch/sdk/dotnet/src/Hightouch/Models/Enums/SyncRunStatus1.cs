using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

/// <summary>
/// The status of sync run
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SyncRunStatus1>))]
public sealed record SyncRunStatus1 : OpenStringEnum<SyncRunStatus1>
{
    private SyncRunStatus1(string value) : base(value)
    {
    }

    public static readonly SyncRunStatus1 Cancelled = new("cancelled");

    public static readonly SyncRunStatus1 Failed = new("failed");

    public static readonly SyncRunStatus1 Queued = new("queued");

    public static readonly SyncRunStatus1 Success = new("success");

    public static readonly SyncRunStatus1 Warning = new("warning");

    public static readonly SyncRunStatus1 Querying = new("querying");

    public static readonly SyncRunStatus1 Processing = new("processing");

    public static readonly SyncRunStatus1 Reporting = new("reporting");

    public static readonly SyncRunStatus1 Interrupted = new("interrupted");

    public TResult Match<TResult>(Func<TResult> onCancelled,
        Func<TResult> onFailed,
        Func<TResult> onQueued,
        Func<TResult> onSuccess,
        Func<TResult> onWarning,
        Func<TResult> onQuerying,
        Func<TResult> onProcessing,
        Func<TResult> onReporting,
        Func<TResult> onInterrupted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Cancelled => onCancelled(),
            _ when this == Failed => onFailed(),
            _ when this == Queued => onQueued(),
            _ when this == Success => onSuccess(),
            _ when this == Warning => onWarning(),
            _ when this == Querying => onQuerying(),
            _ when this == Processing => onProcessing(),
            _ when this == Reporting => onReporting(),
            _ when this == Interrupted => onInterrupted(),
            _ => otherwise(Value)
        };

    public void Match(Action onCancelled,
        Action onFailed,
        Action onQueued,
        Action onSuccess,
        Action onWarning,
        Action onQuerying,
        Action onProcessing,
        Action onReporting,
        Action onInterrupted,
        Action<string> otherwise)
    {
        if (this == Cancelled) onCancelled();
        else if (this == Failed) onFailed();
        else if (this == Queued) onQueued();
        else if (this == Success) onSuccess();
        else if (this == Warning) onWarning();
        else if (this == Querying) onQuerying();
        else if (this == Processing) onProcessing();
        else if (this == Reporting) onReporting();
        else if (this == Interrupted) onInterrupted();
        else otherwise(Value);
    }
}
