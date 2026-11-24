using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Indicates whether content identification was enabled for your transcription request.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContentIdentificationType>))]
public sealed record ContentIdentificationType : OpenStringEnum<ContentIdentificationType>
{
    private ContentIdentificationType(string value) : base(value)
    {
    }

    public static readonly ContentIdentificationType Phi = new("PHI");

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
