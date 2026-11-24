using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Style>))]
public sealed record Style : OpenStringEnum<Style>
{
    private Style(string value) : base(value)
    {
    }

    public static readonly Style Normal = new("normal");

    public static readonly Style Italic = new("italic");

    public TResult Match<TResult>(Func<TResult> onNormal, Func<TResult> onItalic, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Normal => onNormal(),
            _ when this == Italic => onItalic(),
            _ => otherwise(Value)
        };

    public void Match(Action onNormal, Action onItalic, Action<string> otherwise)
    {
        if (this == Normal) onNormal();
        else if (this == Italic) onItalic();
        else otherwise(Value);
    }
}
