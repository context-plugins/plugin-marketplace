using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi>))]
public sealed record XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi : OpenStringEnum<XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi>
{
    private XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi TranscribeDeleteMedicalVocabulary = new(
        "Transcribe.DeleteMedicalVocabulary");

    public TResult Match<TResult>(Func<TResult> onTranscribeDeleteMedicalVocabulary, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeDeleteMedicalVocabulary => onTranscribeDeleteMedicalVocabulary(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeDeleteMedicalVocabulary, Action<string> otherwise)
    {
        if (this == TranscribeDeleteMedicalVocabulary) onTranscribeDeleteMedicalVocabulary();
        else otherwise(Value);
    }
}
