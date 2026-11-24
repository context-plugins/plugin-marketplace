using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Controls how rows excluded by limits are rendered. Applies when any limit type is active
/// (<c>metricFilter</c>, <c>limitByChange</c>, or a <c>group</c> entry with a <c>limit</c>). A report may configure
/// at most two of those three limit types — not all three. When <c>displayValues</c> is not
/// <c>actuals_only</c>, this field must be <c>none</c> (or omitted, which defaults to <c>none</c>).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LimitAggregation>))]
public sealed record LimitAggregation : OpenStringEnum<LimitAggregation>
{
    private LimitAggregation(string value) : base(value)
    {
    }

    public static readonly LimitAggregation None = new("none");

    public static readonly LimitAggregation Top = new("top");

    public static readonly LimitAggregation All = new("all");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onTop,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Top => onTop(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone, Action onTop, Action onAll, Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Top) onTop();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
