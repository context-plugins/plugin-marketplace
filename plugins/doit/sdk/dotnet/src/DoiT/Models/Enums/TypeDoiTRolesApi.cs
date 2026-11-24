using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The type of the role (preset or custom).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeDoiTRolesApi>))]
public sealed record TypeDoiTRolesApi : OpenStringEnum<TypeDoiTRolesApi>
{
    private TypeDoiTRolesApi(string value) : base(value)
    {
    }

    public static readonly TypeDoiTRolesApi Preset = new("preset");

    public static readonly TypeDoiTRolesApi Custom = new("custom");

    public TResult Match<TResult>(Func<TResult> onPreset, Func<TResult> onCustom, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Preset => onPreset(),
            _ when this == Custom => onCustom(),
            _ => otherwise(Value)
        };

    public void Match(Action onPreset, Action onCustom, Action<string> otherwise)
    {
        if (this == Preset) onPreset();
        else if (this == Custom) onCustom();
        else otherwise(Value);
    }
}
