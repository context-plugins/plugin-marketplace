using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonTranscribeServiceVocabulariesApi>))]
public sealed record XAmzTarget2AmazonTranscribeServiceVocabulariesApi : OpenStringEnum<XAmzTarget2AmazonTranscribeServiceVocabulariesApi>
{
    private XAmzTarget2AmazonTranscribeServiceVocabulariesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonTranscribeServiceVocabulariesApi TranscribeGetVocabulary = new(
        "Transcribe.GetVocabulary");

    public TResult Match<TResult>(Func<TResult> onTranscribeGetVocabulary, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeGetVocabulary => onTranscribeGetVocabulary(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeGetVocabulary, Action<string> otherwise)
    {
        if (this == TranscribeGetVocabulary) onTranscribeGetVocabulary();
        else otherwise(Value);
    }
}
