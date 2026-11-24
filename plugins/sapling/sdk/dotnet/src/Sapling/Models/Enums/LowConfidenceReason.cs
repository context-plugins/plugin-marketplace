using System;
using System.Text.Json.Serialization;
using Sapling.Core.Enum;

namespace Sapling.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<LowConfidenceReason>))]
public sealed record LowConfidenceReason : OpenStringEnum<LowConfidenceReason>
{
    private LowConfidenceReason(string value) : base(value)
    {
    }

    public static readonly LowConfidenceReason ShortText = new("short_text");

    public static readonly LowConfidenceReason ListFormat = new("list_format");

    public TResult Match<TResult>(Func<TResult> onShortText,
        Func<TResult> onListFormat,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ShortText => onShortText(),
            _ when this == ListFormat => onListFormat(),
            _ => otherwise(Value)
        };

    public void Match(Action onShortText, Action onListFormat, Action<string> otherwise)
    {
        if (this == ShortText) onShortText();
        else if (this == ListFormat) onListFormat();
        else otherwise(Value);
    }
}
