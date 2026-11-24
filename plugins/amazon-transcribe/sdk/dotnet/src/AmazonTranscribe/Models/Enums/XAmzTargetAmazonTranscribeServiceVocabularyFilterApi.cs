using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonTranscribeServiceVocabularyFilterApi>))]
public sealed record XAmzTargetAmazonTranscribeServiceVocabularyFilterApi : OpenStringEnum<XAmzTargetAmazonTranscribeServiceVocabularyFilterApi>
{
    private XAmzTargetAmazonTranscribeServiceVocabularyFilterApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonTranscribeServiceVocabularyFilterApi TranscribeCreateVocabularyFilter = new(
        "Transcribe.CreateVocabularyFilter");

    public TResult Match<TResult>(Func<TResult> onTranscribeCreateVocabularyFilter, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeCreateVocabularyFilter => onTranscribeCreateVocabularyFilter(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeCreateVocabularyFilter, Action<string> otherwise)
    {
        if (this == TranscribeCreateVocabularyFilter) onTranscribeCreateVocabularyFilter();
        else otherwise(Value);
    }
}
