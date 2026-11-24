using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonTranscribeServiceLanguageModelApi>))]
public sealed record XAmzTarget2AmazonTranscribeServiceLanguageModelApi : OpenStringEnum<XAmzTarget2AmazonTranscribeServiceLanguageModelApi>
{
    private XAmzTarget2AmazonTranscribeServiceLanguageModelApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonTranscribeServiceLanguageModelApi TranscribeDescribeLanguageModel = new(
        "Transcribe.DescribeLanguageModel");

    public TResult Match<TResult>(Func<TResult> onTranscribeDescribeLanguageModel, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeDescribeLanguageModel => onTranscribeDescribeLanguageModel(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeDescribeLanguageModel, Action<string> otherwise)
    {
        if (this == TranscribeDescribeLanguageModel) onTranscribeDescribeLanguageModel();
        else otherwise(Value);
    }
}
