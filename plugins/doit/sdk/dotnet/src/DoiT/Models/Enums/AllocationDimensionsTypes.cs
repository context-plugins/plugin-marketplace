using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Dimension filter type for allocation rule components. See <c>DimensionsTypes</c> for per-value meanings. Allocation components do not support <c>allocation</c>, <c>attribution</c>, or <c>attribution_group</c> types.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AllocationDimensionsTypes>))]
public sealed record AllocationDimensionsTypes : OpenStringEnum<AllocationDimensionsTypes>
{
    private AllocationDimensionsTypes(string value) : base(value)
    {
    }

    public static readonly AllocationDimensionsTypes Datetime = new("datetime");

    public static readonly AllocationDimensionsTypes Fixed = new("fixed");

    public static readonly AllocationDimensionsTypes Optional = new("optional");

    public static readonly AllocationDimensionsTypes Label = new("label");

    public static readonly AllocationDimensionsTypes Tag = new("tag");

    public static readonly AllocationDimensionsTypes ProjectLabel = new("project_label");

    public static readonly AllocationDimensionsTypes SystemLabel = new("system_label");

    public static readonly AllocationDimensionsTypes AllocationRule = new("allocation_rule");

    public static readonly AllocationDimensionsTypes Gke = new("gke");

    public static readonly AllocationDimensionsTypes GkeLabel = new("gke_label");

    public TResult Match<TResult>(Func<TResult> onDatetime,
        Func<TResult> onFixed,
        Func<TResult> onOptional,
        Func<TResult> onLabel,
        Func<TResult> onTag,
        Func<TResult> onProjectLabel,
        Func<TResult> onSystemLabel,
        Func<TResult> onAllocationRule,
        Func<TResult> onGke,
        Func<TResult> onGkeLabel,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Datetime => onDatetime(),
            _ when this == Fixed => onFixed(),
            _ when this == Optional => onOptional(),
            _ when this == Label => onLabel(),
            _ when this == Tag => onTag(),
            _ when this == ProjectLabel => onProjectLabel(),
            _ when this == SystemLabel => onSystemLabel(),
            _ when this == AllocationRule => onAllocationRule(),
            _ when this == Gke => onGke(),
            _ when this == GkeLabel => onGkeLabel(),
            _ => otherwise(Value)
        };

    public void Match(Action onDatetime,
        Action onFixed,
        Action onOptional,
        Action onLabel,
        Action onTag,
        Action onProjectLabel,
        Action onSystemLabel,
        Action onAllocationRule,
        Action onGke,
        Action onGkeLabel,
        Action<string> otherwise)
    {
        if (this == Datetime) onDatetime();
        else if (this == Fixed) onFixed();
        else if (this == Optional) onOptional();
        else if (this == Label) onLabel();
        else if (this == Tag) onTag();
        else if (this == ProjectLabel) onProjectLabel();
        else if (this == SystemLabel) onSystemLabel();
        else if (this == AllocationRule) onAllocationRule();
        else if (this == Gke) onGke();
        else if (this == GkeLabel) onGkeLabel();
        else otherwise(Value);
    }
}
