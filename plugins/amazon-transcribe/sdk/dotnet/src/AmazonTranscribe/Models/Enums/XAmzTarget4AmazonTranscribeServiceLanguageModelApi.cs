using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4AmazonTranscribeServiceLanguageModelApi>))]
public sealed record XAmzTarget4AmazonTranscribeServiceLanguageModelApi : OpenStringEnum<XAmzTarget4AmazonTranscribeServiceLanguageModelApi>
{
    private XAmzTarget4AmazonTranscribeServiceLanguageModelApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4AmazonTranscribeServiceLanguageModelApi TranscribeUpdateLanguageModel = new(
        "Transcribe.UpdateLanguageModel");

    public TResult Match<TResult>(Func<TResult> onTranscribeUpdateLanguageModel, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeUpdateLanguageModel => onTranscribeUpdateLanguageModel(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeUpdateLanguageModel, Action<string> otherwise)
    {
        if (this == TranscribeUpdateLanguageModel) onTranscribeUpdateLanguageModel();
        else otherwise(Value);
    }
}
