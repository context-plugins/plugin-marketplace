using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The type of segment.&lt;br&gt;<c>dynamic</c> - The segment is recalculated at set intervals.&lt;br&gt;<c>static</c> - The segment is calculated once at creation.&lt;br&gt;<c>manual</c> - The segment is not calculated at all. The results are created via CSV.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SegmentType>))]
public sealed record SegmentType : OpenStringEnum<SegmentType>
{
    private SegmentType(string value) : base(value)
    {
    }

    public static readonly SegmentType Dynamic = new("dynamic");

    public static readonly SegmentType Static = new("static");

    public static readonly SegmentType Manual = new("manual");

    public static readonly SegmentType All = new("all");

    public TResult Match<TResult>(Func<TResult> onDynamic,
        Func<TResult> onStatic,
        Func<TResult> onManual,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Dynamic => onDynamic(),
            _ when this == Static => onStatic(),
            _ when this == Manual => onManual(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onDynamic, Action onStatic, Action onManual, Action onAll, Action<string> otherwise)
    {
        if (this == Dynamic) onDynamic();
        else if (this == Static) onStatic();
        else if (this == Manual) onManual();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
