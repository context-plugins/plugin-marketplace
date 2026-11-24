using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi>))]
public sealed record XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi : OpenStringEnum<XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi>
{
    private XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi TranscribeListMedicalVocabularies = new(
        "Transcribe.ListMedicalVocabularies");

    public TResult Match<TResult>(Func<TResult> onTranscribeListMedicalVocabularies, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeListMedicalVocabularies => onTranscribeListMedicalVocabularies(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeListMedicalVocabularies, Action<string> otherwise)
    {
        if (this == TranscribeListMedicalVocabularies) onTranscribeListMedicalVocabularies();
        else otherwise(Value);
    }
}
