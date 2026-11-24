using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Type of the split.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type5>))]
public sealed record Type5 : OpenStringEnum<Type5>
{
    private Type5(string value) : base(value)
    {
    }

    public static readonly Type5 Datetime = new("datetime");

    public static readonly Type5 Fixed = new("fixed");

    public static readonly Type5 Optional = new("optional");

    public static readonly Type5 Label = new("label");

    public static readonly Type5 Tag = new("tag");

    public static readonly Type5 ProjectLabel = new("project_label");

    public static readonly Type5 SystemLabel = new("system_label");

    public static readonly Type5 Attribution = new("attribution");

    public static readonly Type5 AttributionGroup = new("attribution_group");

    public static readonly Type5 Gke = new("gke");

    public static readonly Type5 GkeLabel = new("gke_label");

    public TResult Match<TResult>(Func<TResult> onDatetime,
        Func<TResult> onFixed,
        Func<TResult> onOptional,
        Func<TResult> onLabel,
        Func<TResult> onTag,
        Func<TResult> onProjectLabel,
        Func<TResult> onSystemLabel,
        Func<TResult> onAttribution,
        Func<TResult> onAttributionGroup,
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
        else if (this == Gke) onGke();
        else if (this == GkeLabel) onGkeLabel();
        else otherwise(Value);
    }
}
