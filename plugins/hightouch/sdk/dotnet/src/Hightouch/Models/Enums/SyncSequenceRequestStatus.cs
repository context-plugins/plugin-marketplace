using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SyncSequenceRequestStatus>))]
public sealed record SyncSequenceRequestStatus : OpenStringEnum<SyncSequenceRequestStatus>
{
    private SyncSequenceRequestStatus(string value) : base(value)
    {
    }

    public static readonly SyncSequenceRequestStatus Pending = new("pending");

    public static readonly SyncSequenceRequestStatus Running = new("running");

    public static readonly SyncSequenceRequestStatus Done = new("done");

    public static readonly SyncSequenceRequestStatus Failed = new("failed");

    public static readonly SyncSequenceRequestStatus Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onRunning,
        Func<TResult> onDone,
        Func<TResult> onFailed,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Running => onRunning(),
            _ when this == Done => onDone(),
            _ when this == Failed => onFailed(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onRunning,
        Action onDone,
        Action onFailed,
        Action onCancelled,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Running) onRunning();
        else if (this == Done) onDone();
        else if (this == Failed) onFailed();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
