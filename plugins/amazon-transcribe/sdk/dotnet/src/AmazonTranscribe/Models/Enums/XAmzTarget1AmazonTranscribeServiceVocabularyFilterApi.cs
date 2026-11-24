using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi>))]
public sealed record XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi : OpenStringEnum<XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi>
{
    private XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi TranscribeDeleteVocabularyFilter = new(
        "Transcribe.DeleteVocabularyFilter");

    public TResult Match<TResult>(Func<TResult> onTranscribeDeleteVocabularyFilter, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeDeleteVocabularyFilter => onTranscribeDeleteVocabularyFilter(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeDeleteVocabularyFilter, Action<string> otherwise)
    {
        if (this == TranscribeDeleteVocabularyFilter) onTranscribeDeleteVocabularyFilter();
        else otherwise(Value);
    }
}
