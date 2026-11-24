using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

/// <summary>
/// "queueing": The identifiers are being queued for reprocessing.
/// "queued": The identifiers have been queued and added to the blocklist. Their associated clusters will be reprocessed next time the graph runs.
/// "reprocessed": The identifiers' clusters have been reprocessed during a run.
/// "failed": We failed to queue the identifiers for reprocessing.
/// "cancelled": The reprocessing request has been cancelled.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Queueing = new("queueing");

    public static readonly Status1 Queued = new("queued");

    public static readonly Status1 Reprocessed = new("reprocessed");

    public static readonly Status1 Failed = new("failed");

    public static readonly Status1 Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onQueueing,
        Func<TResult> onQueued,
        Func<TResult> onReprocessed,
        Func<TResult> onFailed,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queueing => onQueueing(),
            _ when this == Queued => onQueued(),
            _ when this == Reprocessed => onReprocessed(),
            _ when this == Failed => onFailed(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueueing,
        Action onQueued,
        Action onReprocessed,
        Action onFailed,
        Action onCancelled,
        Action<string> otherwise)
    {
        if (this == Queueing) onQueueing();
        else if (this == Queued) onQueued();
        else if (this == Reprocessed) onReprocessed();
        else if (this == Failed) onFailed();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
