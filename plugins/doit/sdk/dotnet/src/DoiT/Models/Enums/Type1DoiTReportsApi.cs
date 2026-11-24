using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Report type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1DoiTReportsApi>))]
public sealed record Type1DoiTReportsApi : OpenStringEnum<Type1DoiTReportsApi>
{
    private Type1DoiTReportsApi(string value) : base(value)
    {
    }

    public static readonly Type1DoiTReportsApi Custom = new("custom");

    public static readonly Type1DoiTReportsApi Preset = new("preset");

    public static readonly Type1DoiTReportsApi Managed = new("managed");

    public TResult Match<TResult>(Func<TResult> onCustom,
        Func<TResult> onPreset,
        Func<TResult> onManaged,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Custom => onCustom(),
            _ when this == Preset => onPreset(),
            _ when this == Managed => onManaged(),
            _ => otherwise(Value)
        };

    public void Match(Action onCustom, Action onPreset, Action onManaged, Action<string> otherwise)
    {
        if (this == Custom) onCustom();
        else if (this == Preset) onPreset();
        else if (this == Managed) onManaged();
        else otherwise(Value);
    }
}
