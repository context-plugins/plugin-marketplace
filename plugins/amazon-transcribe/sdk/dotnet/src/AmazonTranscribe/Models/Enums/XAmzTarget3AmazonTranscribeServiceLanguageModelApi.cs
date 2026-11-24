using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonTranscribeServiceLanguageModelApi>))]
public sealed record XAmzTarget3AmazonTranscribeServiceLanguageModelApi : OpenStringEnum<XAmzTarget3AmazonTranscribeServiceLanguageModelApi>
{
    private XAmzTarget3AmazonTranscribeServiceLanguageModelApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonTranscribeServiceLanguageModelApi TranscribeListLanguageModels = new(
        "Transcribe.ListLanguageModels");

    public TResult Match<TResult>(Func<TResult> onTranscribeListLanguageModels, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeListLanguageModels => onTranscribeListLanguageModels(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeListLanguageModels, Action<string> otherwise)
    {
        if (this == TranscribeListLanguageModels) onTranscribeListLanguageModels();
        else otherwise(Value);
    }
}
