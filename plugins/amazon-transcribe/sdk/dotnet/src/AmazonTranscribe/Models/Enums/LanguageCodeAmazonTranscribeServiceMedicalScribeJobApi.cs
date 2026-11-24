using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The language code used to create your Medical Scribe job. US English (en-US) is the only supported language for Medical Scribe jobs.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LanguageCodeAmazonTranscribeServiceMedicalScribeJobApi>))]
public sealed record LanguageCodeAmazonTranscribeServiceMedicalScribeJobApi : OpenStringEnum<LanguageCodeAmazonTranscribeServiceMedicalScribeJobApi>
{
    private LanguageCodeAmazonTranscribeServiceMedicalScribeJobApi(string value) : base(value)
    {
    }

    public static readonly LanguageCodeAmazonTranscribeServiceMedicalScribeJobApi EnUs = new("en-US");

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
