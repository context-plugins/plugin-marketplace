using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// Font style of the frame label text. <c>italic</c> applies <c>font-style="italic"</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Style1>))]
public sealed record Style1 : OpenStringEnum<Style1>
{
    private Style1(string value) : base(value)
    {
    }

    public static readonly Style1 Normal = new("normal");

    public static readonly Style1 Italic = new("italic");

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
