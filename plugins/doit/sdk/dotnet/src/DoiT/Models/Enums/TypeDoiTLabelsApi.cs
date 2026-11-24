using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The type of the label (custom or preset).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeDoiTLabelsApi>))]
public sealed record TypeDoiTLabelsApi : OpenStringEnum<TypeDoiTLabelsApi>
{
    private TypeDoiTLabelsApi(string value) : base(value)
    {
    }

    public static readonly TypeDoiTLabelsApi Custom = new("custom");

    public static readonly TypeDoiTLabelsApi Preset = new("preset");

    public TResult Match<TResult>(Func<TResult> onCustom, Func<TResult> onPreset, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Custom => onCustom(),
            _ when this == Preset => onPreset(),
            _ => otherwise(Value)
        };

    public void Match(Action onCustom, Action onPreset, Action<string> otherwise)
    {
        if (this == Custom) onCustom();
        else if (this == Preset) onPreset();
        else otherwise(Value);
    }
}
