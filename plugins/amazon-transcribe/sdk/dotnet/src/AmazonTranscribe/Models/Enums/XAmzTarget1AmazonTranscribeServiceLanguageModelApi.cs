using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonTranscribeServiceLanguageModelApi>))]
public sealed record XAmzTarget1AmazonTranscribeServiceLanguageModelApi : OpenStringEnum<XAmzTarget1AmazonTranscribeServiceLanguageModelApi>
{
    private XAmzTarget1AmazonTranscribeServiceLanguageModelApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonTranscribeServiceLanguageModelApi TranscribeDeleteLanguageModel = new(
        "Transcribe.DeleteLanguageModel");

    public TResult Match<TResult>(Func<TResult> onTranscribeDeleteLanguageModel, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeDeleteLanguageModel => onTranscribeDeleteLanguageModel(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeDeleteLanguageModel, Action<string> otherwise)
    {
        if (this == TranscribeDeleteLanguageModel) onTranscribeDeleteLanguageModel();
        else otherwise(Value);
    }
}
