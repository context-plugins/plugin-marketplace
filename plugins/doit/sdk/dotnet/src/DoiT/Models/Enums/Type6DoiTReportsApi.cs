using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The metadata field type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type6DoiTReportsApi>))]
public sealed record Type6DoiTReportsApi : OpenStringEnum<Type6DoiTReportsApi>
{
    private Type6DoiTReportsApi(string value) : base(value)
    {
    }

    public static readonly Type6DoiTReportsApi Fixed = new("fixed");

    public static readonly Type6DoiTReportsApi Label = new("label");

    public static readonly Type6DoiTReportsApi Tag = new("tag");

    public static readonly Type6DoiTReportsApi ProjectLabel = new("project_label");

    public static readonly Type6DoiTReportsApi SystemLabel = new("system_label");

    public TResult Match<TResult>(Func<TResult> onFixed,
        Func<TResult> onLabel,
        Func<TResult> onTag,
        Func<TResult> onProjectLabel,
        Func<TResult> onSystemLabel,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Fixed => onFixed(),
            _ when this == Label => onLabel(),
            _ when this == Tag => onTag(),
            _ when this == ProjectLabel => onProjectLabel(),
            _ when this == SystemLabel => onSystemLabel(),
            _ => otherwise(Value)
        };

    public void Match(Action onFixed,
        Action onLabel,
        Action onTag,
        Action onProjectLabel,
        Action onSystemLabel,
        Action<string> otherwise)
    {
        if (this == Fixed) onFixed();
        else if (this == Label) onLabel();
        else if (this == Tag) onTag();
        else if (this == ProjectLabel) onProjectLabel();
        else if (this == SystemLabel) onSystemLabel();
        else otherwise(Value);
    }
}
