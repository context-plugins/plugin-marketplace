using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Shows whether content redaction was enabled for your Call Analytics transcription.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContentRedactionType>))]
public sealed record ContentRedactionType : OpenStringEnum<ContentRedactionType>
{
    private ContentRedactionType(string value) : base(value)
    {
    }

    public static readonly ContentRedactionType Pii = new("PII");

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
