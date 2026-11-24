using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The dimension type to read the value from. Label-map types (label, tag, project_label, system_label, gke_label) extract the value of the given key; "fixed" extracts a raw table dimension (for example project_id, service_description, region). Derived dimensions such as credits are not extractable.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeDoiTAllocationsApi>))]
public sealed record TypeDoiTAllocationsApi : OpenStringEnum<TypeDoiTAllocationsApi>
{
    private TypeDoiTAllocationsApi(string value) : base(value)
    {
    }

    public static readonly TypeDoiTAllocationsApi Label = new("label");

    public static readonly TypeDoiTAllocationsApi Tag = new("tag");

    public static readonly TypeDoiTAllocationsApi ProjectLabel = new("project_label");

    public static readonly TypeDoiTAllocationsApi SystemLabel = new("system_label");

    public static readonly TypeDoiTAllocationsApi GkeLabel = new("gke_label");

    public static readonly TypeDoiTAllocationsApi Fixed = new("fixed");

    public TResult Match<TResult>(Func<TResult> onLabel,
        Func<TResult> onTag,
        Func<TResult> onProjectLabel,
        Func<TResult> onSystemLabel,
        Func<TResult> onGkeLabel,
        Func<TResult> onFixed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Label => onLabel(),
            _ when this == Tag => onTag(),
            _ when this == ProjectLabel => onProjectLabel(),
            _ when this == SystemLabel => onSystemLabel(),
            _ when this == GkeLabel => onGkeLabel(),
            _ when this == Fixed => onFixed(),
            _ => otherwise(Value)
        };

    public void Match(Action onLabel,
        Action onTag,
        Action onProjectLabel,
        Action onSystemLabel,
        Action onGkeLabel,
        Action onFixed,
        Action<string> otherwise)
    {
        if (this == Label) onLabel();
        else if (this == Tag) onTag();
        else if (this == ProjectLabel) onProjectLabel();
        else if (this == SystemLabel) onSystemLabel();
        else if (this == GkeLabel) onGkeLabel();
        else if (this == Fixed) onFixed();
        else otherwise(Value);
    }
}
