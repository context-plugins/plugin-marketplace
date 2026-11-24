using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi>))]
public sealed record XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi : OpenStringEnum<XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi>
{
    private XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi TranscribeListVocabularyFilters = new(
        "Transcribe.ListVocabularyFilters");

    public TResult Match<TResult>(Func<TResult> onTranscribeListVocabularyFilters, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeListVocabularyFilters => onTranscribeListVocabularyFilters(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeListVocabularyFilters, Action<string> otherwise)
    {
        if (this == TranscribeListVocabularyFilters) onTranscribeListVocabularyFilters();
        else otherwise(Value);
    }
}
