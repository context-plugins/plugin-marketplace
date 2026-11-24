using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Labels all personal health information (PHI) identified in your transcript. For more information, see Identifying personal health information (PHI) in a transcription.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContentIdentificationType1>))]
public sealed record ContentIdentificationType1 : OpenStringEnum<ContentIdentificationType1>
{
    private ContentIdentificationType1(string value) : base(value)
    {
    }

    public static readonly ContentIdentificationType1 Phi = new("PHI");

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
