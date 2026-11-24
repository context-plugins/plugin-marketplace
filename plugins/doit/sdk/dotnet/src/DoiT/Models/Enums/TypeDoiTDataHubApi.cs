using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The dimension type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeDoiTDataHubApi>))]
public sealed record TypeDoiTDataHubApi : OpenStringEnum<TypeDoiTDataHubApi>
{
    private TypeDoiTDataHubApi(string value) : base(value)
    {
    }

    public static readonly TypeDoiTDataHubApi Fixed = new("fixed");

    public static readonly TypeDoiTDataHubApi Label = new("label");

    public static readonly TypeDoiTDataHubApi ProjectLabel = new("project_label");

    public static readonly TypeDoiTDataHubApi SystemLabel = new("system_label");

    public TResult Match<TResult>(Func<TResult> onFixed,
        Func<TResult> onLabel,
        Func<TResult> onProjectLabel,
        Func<TResult> onSystemLabel,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Fixed => onFixed(),
            _ when this == Label => onLabel(),
            _ when this == ProjectLabel => onProjectLabel(),
            _ when this == SystemLabel => onSystemLabel(),
            _ => otherwise(Value)
        };

    public void Match(Action onFixed,
        Action onLabel,
        Action onProjectLabel,
        Action onSystemLabel,
        Action<string> otherwise)
    {
        if (this == Fixed) onFixed();
        else if (this == Label) onLabel();
        else if (this == ProjectLabel) onProjectLabel();
        else if (this == SystemLabel) onSystemLabel();
        else otherwise(Value);
    }
}
