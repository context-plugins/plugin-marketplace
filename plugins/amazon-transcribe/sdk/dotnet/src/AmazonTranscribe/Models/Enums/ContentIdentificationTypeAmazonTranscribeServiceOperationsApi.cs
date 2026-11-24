using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Shows whether content identification was enabled for your Call Analytics transcription.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContentIdentificationTypeAmazonTranscribeServiceOperationsApi>))]
public sealed record ContentIdentificationTypeAmazonTranscribeServiceOperationsApi : OpenStringEnum<ContentIdentificationTypeAmazonTranscribeServiceOperationsApi>
{
    private ContentIdentificationTypeAmazonTranscribeServiceOperationsApi(string value) : base(value)
    {
    }

    public static readonly ContentIdentificationTypeAmazonTranscribeServiceOperationsApi Pii = new("PII");

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
