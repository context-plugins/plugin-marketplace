using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi>))]
public sealed record XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi : OpenStringEnum<XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi>
{
    private XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi TranscribeCreateMedicalVocabulary = new(
        "Transcribe.CreateMedicalVocabulary");

    public TResult Match<TResult>(Func<TResult> onTranscribeCreateMedicalVocabulary, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeCreateMedicalVocabulary => onTranscribeCreateMedicalVocabulary(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeCreateMedicalVocabulary, Action<string> otherwise)
    {
        if (this == TranscribeCreateMedicalVocabulary) onTranscribeCreateMedicalVocabulary();
        else otherwise(Value);
    }
}
