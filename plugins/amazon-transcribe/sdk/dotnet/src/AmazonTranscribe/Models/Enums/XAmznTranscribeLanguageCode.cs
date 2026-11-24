using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmznTranscribeLanguageCode>))]
public sealed record XAmznTranscribeLanguageCode : OpenStringEnum<XAmznTranscribeLanguageCode>
{
    private XAmznTranscribeLanguageCode(string value) : base(value)
    {
    }

    public static readonly XAmznTranscribeLanguageCode EnUs = new("en-US");

    public TResult Match<TResult>(Func<TResult> onEnUs, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EnUs => onEnUs(),
            _ => otherwise(Value)
        };

    public void Match(Action onEnUs, Action<string> otherwise)
    {
        if (this == EnUs) onEnUs();
        else otherwise(Value);
    }
}
