using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Shows whether content identification was enabled for your transcription.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContentIdentificationType2>))]
public sealed record ContentIdentificationType2 : OpenStringEnum<ContentIdentificationType2>
{
    private ContentIdentificationType2(string value) : base(value)
    {
    }

    public static readonly ContentIdentificationType2 Pii = new("PII");

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
