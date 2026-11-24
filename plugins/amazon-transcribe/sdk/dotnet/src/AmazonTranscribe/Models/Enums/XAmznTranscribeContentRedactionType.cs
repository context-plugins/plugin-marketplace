using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmznTranscribeContentRedactionType>))]
public sealed record XAmznTranscribeContentRedactionType : OpenStringEnum<XAmznTranscribeContentRedactionType>
{
    private XAmznTranscribeContentRedactionType(string value) : base(value)
    {
    }

    public static readonly XAmznTranscribeContentRedactionType Pii = new("PII");

    public TResult Match<TResult>(Func<TResult> onPii, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pii => onPii(),
            _ => otherwise(Value)
        };

    public void Match(Action onPii, Action<string> otherwise)
    {
        if (this == Pii) onPii();
        else otherwise(Value);
    }
}
