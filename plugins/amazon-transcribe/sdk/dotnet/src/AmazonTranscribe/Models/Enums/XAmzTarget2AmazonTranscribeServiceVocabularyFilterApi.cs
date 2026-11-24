using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi>))]
public sealed record XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi : OpenStringEnum<XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi>
{
    private XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi TranscribeGetVocabularyFilter = new(
        "Transcribe.GetVocabularyFilter");

    public TResult Match<TResult>(Func<TResult> onTranscribeGetVocabularyFilter, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeGetVocabularyFilter => onTranscribeGetVocabularyFilter(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeGetVocabularyFilter, Action<string> otherwise)
    {
        if (this == TranscribeGetVocabularyFilter) onTranscribeGetVocabularyFilter();
        else otherwise(Value);
    }
}
