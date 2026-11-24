using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Shows whether content identification was enabled for your transcription.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContentIdentificationType1AmazonTranscribeServiceOperationsApi>))]
public sealed record ContentIdentificationType1AmazonTranscribeServiceOperationsApi : OpenStringEnum<ContentIdentificationType1AmazonTranscribeServiceOperationsApi>
{
    private ContentIdentificationType1AmazonTranscribeServiceOperationsApi(string value) : base(value)
    {
    }

    public static readonly ContentIdentificationType1AmazonTranscribeServiceOperationsApi Phi = new("PHI");

    public TResult Match<TResult>(Func<TResult> onPhi, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Phi => onPhi(),
            _ => otherwise(Value)
        };

    public void Match(Action onPhi, Action<string> otherwise)
    {
        if (this == Phi) onPhi();
        else otherwise(Value);
    }
}
