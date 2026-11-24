using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Present only when the operation was started against a saved report (run by id) and the report still exists; omitted for ad hoc runs against an inline config.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type9DoiTReportsApi>))]
public sealed record Type9DoiTReportsApi : OpenStringEnum<Type9DoiTReportsApi>
{
    private Type9DoiTReportsApi(string value) : base(value)
    {
    }

    public static readonly Type9DoiTReportsApi Custom = new("custom");

    public static readonly Type9DoiTReportsApi Preset = new("preset");

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
