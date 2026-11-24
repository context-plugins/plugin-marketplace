using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Whether the widget is supplied by DoiT or defined by a customer.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeDoiTWidgetsBetaApi>))]
public sealed record TypeDoiTWidgetsBetaApi : OpenStringEnum<TypeDoiTWidgetsBetaApi>
{
    private TypeDoiTWidgetsBetaApi(string value) : base(value)
    {
    }

    public static readonly TypeDoiTWidgetsBetaApi Custom = new("custom");

    public static readonly TypeDoiTWidgetsBetaApi Preset = new("preset");

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
