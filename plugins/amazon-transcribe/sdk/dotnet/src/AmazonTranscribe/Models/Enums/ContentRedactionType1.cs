using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Shows whether content redaction was enabled for your transcription.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContentRedactionType1>))]
public sealed record ContentRedactionType1 : OpenStringEnum<ContentRedactionType1>
{
    private ContentRedactionType1(string value) : base(value)
    {
    }

    public static readonly ContentRedactionType1 Pii = new("PII");

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
