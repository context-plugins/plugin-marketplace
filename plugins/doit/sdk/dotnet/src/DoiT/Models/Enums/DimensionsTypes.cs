using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Dimension filter type. Always pair <c>type</c> with <c>id</c> on scope filters. Discover valid <c>id</c> + <c>type</c> pairs for your account with <c>GET /analytics/v1/dimensions</c>. <c>allocation_rule</c> replaces <c>attribution</c>; <c>allocation</c> replaces <c>attribution_group</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DimensionsTypes>))]
public sealed record DimensionsTypes : OpenStringEnum<DimensionsTypes>
{
    private DimensionsTypes(string value) : base(value)
    {
    }

    public static readonly DimensionsTypes Datetime = new("datetime");

    public static readonly DimensionsTypes Fixed = new("fixed");

    public static readonly DimensionsTypes Optional = new("optional");

    public static readonly DimensionsTypes Label = new("label");

    public static readonly DimensionsTypes Tag = new("tag");

    public static readonly DimensionsTypes ProjectLabel = new("project_label");

    public static readonly DimensionsTypes SystemLabel = new("system_label");

    public static readonly DimensionsTypes Attribution = new("attribution");

    public static readonly DimensionsTypes AttributionGroup = new("attribution_group");

    public static readonly DimensionsTypes Allocation = new("allocation");

    public static readonly DimensionsTypes AllocationRule = new("allocation_rule");

    public static readonly DimensionsTypes Gke = new("gke");

    public static readonly DimensionsTypes GkeLabel = new("gke_label");

    public TResult Match<TResult>(Func<TResult> onDatetime,
        Func<TResult> onFixed,
        Func<TResult> onOptional,
        Func<TResult> onLabel,
        Func<TResult> onTag,
        Func<TResult> onProjectLabel,
        Func<TResult> onSystemLabel,
        Func<TResult> onAttribution,
        Func<TResult> onAttributionGroup,
        Func<TResult> onAllocation,
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
            _ when this == Attribution => onAttribution(),
            _ when this == AttributionGroup => onAttributionGroup(),
            _ when this == Allocation => onAllocation(),
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
        Action onAttribution,
        Action onAttributionGroup,
        Action onAllocation,
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
        else if (this == Attribution) onAttribution();
        else if (this == AttributionGroup) onAttributionGroup();
        else if (this == Allocation) onAllocation();
        else if (this == AllocationRule) onAllocationRule();
        else if (this == Gke) onGke();
        else if (this == GkeLabel) onGkeLabel();
        else otherwise(Value);
    }
}
