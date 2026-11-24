using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The Language Code that you specified in your request. Same as provided in the StartMedicalScribeStreamRequest.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LanguageCode6>))]
public sealed record LanguageCode6 : OpenStringEnum<LanguageCode6>
{
    private LanguageCode6(string value) : base(value)
    {
    }

    public static readonly LanguageCode6 EnUs = new("en-US");

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
