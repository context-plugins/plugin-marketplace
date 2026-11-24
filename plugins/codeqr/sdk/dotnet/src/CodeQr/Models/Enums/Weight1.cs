using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// Font weight of the frame label text. <c>bold</c> renders at SVG <c>font-weight="700"</c>, <c>normal</c> at <c>400</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Weight1>))]
public sealed record Weight1 : OpenStringEnum<Weight1>
{
    private Weight1(string value) : base(value)
    {
    }

    public static readonly Weight1 Normal = new("normal");

    public static readonly Weight1 Bold = new("bold");

    public TResult Match<TResult>(Func<TResult> onNormal, Func<TResult> onBold, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Normal => onNormal(),
            _ when this == Bold => onBold(),
            _ => otherwise(Value)
        };

    public void Match(Action onNormal, Action onBold, Action<string> otherwise)
    {
        if (this == Normal) onNormal();
        else if (this == Bold) onBold();
        else otherwise(Value);
    }
}
