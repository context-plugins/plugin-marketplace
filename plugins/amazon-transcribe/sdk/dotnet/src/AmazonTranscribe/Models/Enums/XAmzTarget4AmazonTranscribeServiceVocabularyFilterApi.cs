using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi>))]
public sealed record XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi : OpenStringEnum<XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi>
{
    private XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi TranscribeUpdateVocabularyFilter = new(
        "Transcribe.UpdateVocabularyFilter");

    public TResult Match<TResult>(Func<TResult> onTranscribeUpdateVocabularyFilter, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeUpdateVocabularyFilter => onTranscribeUpdateVocabularyFilter(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeUpdateVocabularyFilter, Action<string> otherwise)
    {
        if (this == TranscribeUpdateVocabularyFilter) onTranscribeUpdateVocabularyFilter();
        else otherwise(Value);
    }
}
