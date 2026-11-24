using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The status of the segment's most recent calculation.&lt;br&gt;<c>pending</c> - The segment has not been calculated yet.&lt;br&gt;<c>processing</c> - The calculation is in progress, and has not completed.&lt;br&gt;<c>completed</c> - The calculation was successful.&lt;br&gt;<c>failed</c> - Something went wrong during the calculation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SegmentStatus>))]
public sealed record SegmentStatus : OpenStringEnum<SegmentStatus>
{
    private SegmentStatus(string value) : base(value)
    {
    }

    public static readonly SegmentStatus Pending = new("pending");

    public static readonly SegmentStatus Processing = new("processing");

    public static readonly SegmentStatus Completed = new("completed");

    public static readonly SegmentStatus Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onProcessing,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Processing => onProcessing(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onProcessing,
        Action onCompleted,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Processing) onProcessing();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
