using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonTranscribeServiceLanguageModelApi>))]
public sealed record XAmzTargetAmazonTranscribeServiceLanguageModelApi : OpenStringEnum<XAmzTargetAmazonTranscribeServiceLanguageModelApi>
{
    private XAmzTargetAmazonTranscribeServiceLanguageModelApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonTranscribeServiceLanguageModelApi TranscribeCreateLanguageModel = new(
        "Transcribe.CreateLanguageModel");

    public TResult Match<TResult>(Func<TResult> onTranscribeCreateLanguageModel, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeCreateLanguageModel => onTranscribeCreateLanguageModel(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeCreateLanguageModel, Action<string> otherwise)
    {
        if (this == TranscribeCreateLanguageModel) onTranscribeCreateLanguageModel();
        else otherwise(Value);
    }
}
