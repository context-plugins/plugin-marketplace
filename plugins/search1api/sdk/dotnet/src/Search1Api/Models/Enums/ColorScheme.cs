using System;
using System.Text.Json.Serialization;
using Search1Api.Core.Enum;

namespace Search1Api.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ColorScheme>))]
public sealed record ColorScheme : OpenStringEnum<ColorScheme>
{
    private ColorScheme(string value) : base(value)
    {
    }

    public static readonly ColorScheme Light = new("light");

    public static readonly ColorScheme Dark = new("dark");

    public TResult Match<TResult>(Func<TResult> onLight, Func<TResult> onDark, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Light => onLight(),
            _ when this == Dark => onDark(),
            _ => otherwise(Value)
        };

    public void Match(Action onLight, Action onDark, Action<string> otherwise)
    {
        if (this == Light) onLight();
        else if (this == Dark) onDark();
        else otherwise(Value);
    }
}
