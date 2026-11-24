using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Current lifecycle status of the operation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1DoiTReportsApi>))]
public sealed record Status1DoiTReportsApi : OpenStringEnum<Status1DoiTReportsApi>
{
    private Status1DoiTReportsApi(string value) : base(value)
    {
    }

    public static readonly Status1DoiTReportsApi Pending = new("pending");

    public static readonly Status1DoiTReportsApi Running = new("running");

    public static readonly Status1DoiTReportsApi Succeeded = new("succeeded");

    public static readonly Status1DoiTReportsApi Failed = new("failed");

    public static readonly Status1DoiTReportsApi Canceled = new("canceled");

    public static readonly Status1DoiTReportsApi DryRun = new("dry_run");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onRunning,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<TResult> onCanceled,
        Func<TResult> onDryRun,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Running => onRunning(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ when this == Canceled => onCanceled(),
            _ when this == DryRun => onDryRun(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onRunning,
        Action onSucceeded,
        Action onFailed,
        Action onCanceled,
        Action onDryRun,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Running) onRunning();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else if (this == Canceled) onCanceled();
        else if (this == DryRun) onDryRun();
        else otherwise(Value);
    }
}
