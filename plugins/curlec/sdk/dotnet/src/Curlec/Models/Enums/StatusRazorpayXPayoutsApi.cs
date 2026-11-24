using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusRazorpayXPayoutsApi>))]
public sealed record StatusRazorpayXPayoutsApi : OpenStringEnum<StatusRazorpayXPayoutsApi>
{
    private StatusRazorpayXPayoutsApi(string value) : base(value)
    {
    }

    public static readonly StatusRazorpayXPayoutsApi Queued = new("queued");

    public static readonly StatusRazorpayXPayoutsApi Pending = new("pending");

    public static readonly StatusRazorpayXPayoutsApi Rejected = new("rejected");

    public static readonly StatusRazorpayXPayoutsApi Processing = new("processing");

    public static readonly StatusRazorpayXPayoutsApi Processed = new("processed");

    public static readonly StatusRazorpayXPayoutsApi Cancelled = new("cancelled");

    public static readonly StatusRazorpayXPayoutsApi Reversed = new("reversed");

    public static readonly StatusRazorpayXPayoutsApi Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onQueued,
        Func<TResult> onPending,
        Func<TResult> onRejected,
        Func<TResult> onProcessing,
        Func<TResult> onProcessed,
        Func<TResult> onCancelled,
        Func<TResult> onReversed,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ when this == Pending => onPending(),
            _ when this == Rejected => onRejected(),
            _ when this == Processing => onProcessing(),
            _ when this == Processed => onProcessed(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Reversed => onReversed(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued,
        Action onPending,
        Action onRejected,
        Action onProcessing,
        Action onProcessed,
        Action onCancelled,
        Action onReversed,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else if (this == Pending) onPending();
        else if (this == Rejected) onRejected();
        else if (this == Processing) onProcessing();
        else if (this == Processed) onProcessed();
        else if (this == Cancelled) onCancelled();
        else if (this == Reversed) onReversed();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
