using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The Language Code of the HealthScribe streaming session.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LanguageCode2AmazonTranscribeServiceOperationsApi>))]
public sealed record LanguageCode2AmazonTranscribeServiceOperationsApi : OpenStringEnum<LanguageCode2AmazonTranscribeServiceOperationsApi>
{
    private LanguageCode2AmazonTranscribeServiceOperationsApi(string value) : base(value)
    {
    }

    public static readonly LanguageCode2AmazonTranscribeServiceOperationsApi EnUs = new("en-US");

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
