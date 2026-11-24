using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi>))]
public sealed record XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi : OpenStringEnum<XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi>
{
    private XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi TranscribeGetMedicalVocabulary = new(
        "Transcribe.GetMedicalVocabulary");

    public TResult Match<TResult>(Func<TResult> onTranscribeGetMedicalVocabulary, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeGetMedicalVocabulary => onTranscribeGetMedicalVocabulary(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeGetMedicalVocabulary, Action<string> otherwise)
    {
        if (this == TranscribeGetMedicalVocabulary) onTranscribeGetMedicalVocabulary();
        else otherwise(Value);
    }
}
