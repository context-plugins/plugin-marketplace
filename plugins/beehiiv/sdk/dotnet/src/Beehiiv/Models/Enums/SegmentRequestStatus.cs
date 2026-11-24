using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SegmentRequestStatus>))]
public sealed record SegmentRequestStatus : OpenStringEnum<SegmentRequestStatus>
{
    private SegmentRequestStatus(string value) : base(value)
    {
    }

    public static readonly SegmentRequestStatus Pending = new("pending");

    public static readonly SegmentRequestStatus Processing = new("processing");

    public static readonly SegmentRequestStatus Completed = new("completed");

    public static readonly SegmentRequestStatus Failed = new("failed");

    public static readonly SegmentRequestStatus All = new("all");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onProcessing,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Processing => onProcessing(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onProcessing,
        Action onCompleted,
        Action onFailed,
        Action onAll,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Processing) onProcessing();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
