using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// Filter by QR code format - static or dynamic
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Format>))]
public sealed record Format : OpenStringEnum<Format>
{
    private Format(string value) : base(value)
    {
    }

    public static readonly Format Static = new("static");

    public static readonly Format Dynamic = new("dynamic");

    public TResult Match<TResult>(Func<TResult> onStatic, Func<TResult> onDynamic, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Static => onStatic(),
            _ when this == Dynamic => onDynamic(),
            _ => otherwise(Value)
        };

    public void Match(Action onStatic, Action onDynamic, Action<string> otherwise)
    {
        if (this == Static) onStatic();
        else if (this == Dynamic) onDynamic();
        else otherwise(Value);
    }
}
