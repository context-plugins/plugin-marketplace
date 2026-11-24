using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

/// <summary>
/// SyncStatus
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SyncStatus>))]
public sealed record SyncStatus : OpenStringEnum<SyncStatus>
{
    private SyncStatus(string value) : base(value)
    {
    }

    public static readonly SyncStatus Disabled = new("disabled");

    public static readonly SyncStatus Pending = new("pending");

    public static readonly SyncStatus Cancelled = new("cancelled");

    public static readonly SyncStatus Failed = new("failed");

    public static readonly SyncStatus Queued = new("queued");

    public static readonly SyncStatus Success = new("success");

    public static readonly SyncStatus Warning = new("warning");

    public static readonly SyncStatus Querying = new("querying");

    public static readonly SyncStatus Processing = new("processing");

    public static readonly SyncStatus Reporting = new("reporting");

    public static readonly SyncStatus Interrupted = new("interrupted");

    public TResult Match<TResult>(Func<TResult> onDisabled,
        Func<TResult> onPending,
        Func<TResult> onCancelled,
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
            _ when this == Disabled => onDisabled(),
            _ when this == Pending => onPending(),
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

    public void Match(Action onDisabled,
        Action onPending,
        Action onCancelled,
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
        if (this == Disabled) onDisabled();
        else if (this == Pending) onPending();
        else if (this == Cancelled) onCancelled();
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
