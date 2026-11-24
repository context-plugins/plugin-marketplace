using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Type of the target.
/// If split type is "attribution_group", then target type must be "attribution".
/// Otherwise split types and target types must be the same.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type4DoiTReportsApi>))]
public sealed record Type4DoiTReportsApi : OpenStringEnum<Type4DoiTReportsApi>
{
    private Type4DoiTReportsApi(string value) : base(value)
    {
    }

    public static readonly Type4DoiTReportsApi Datetime = new("datetime");

    public static readonly Type4DoiTReportsApi Fixed = new("fixed");

    public static readonly Type4DoiTReportsApi Optional = new("optional");

    public static readonly Type4DoiTReportsApi Label = new("label");

    public static readonly Type4DoiTReportsApi Tag = new("tag");

    public static readonly Type4DoiTReportsApi ProjectLabel = new("project_label");

    public static readonly Type4DoiTReportsApi SystemLabel = new("system_label");

    public static readonly Type4DoiTReportsApi Attribution = new("attribution");

    public static readonly Type4DoiTReportsApi AttributionGroup = new("attribution_group");

    public static readonly Type4DoiTReportsApi Gke = new("gke");

    public static readonly Type4DoiTReportsApi GkeLabel = new("gke_label");

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
