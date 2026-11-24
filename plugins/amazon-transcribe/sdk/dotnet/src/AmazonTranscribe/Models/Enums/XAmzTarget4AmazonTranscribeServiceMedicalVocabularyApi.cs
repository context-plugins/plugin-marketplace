using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi>))]
public sealed record XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi : OpenStringEnum<XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi>
{
    private XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi TranscribeUpdateMedicalVocabulary = new(
        "Transcribe.UpdateMedicalVocabulary");

    public TResult Match<TResult>(Func<TResult> onTranscribeUpdateMedicalVocabulary, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeUpdateMedicalVocabulary => onTranscribeUpdateMedicalVocabulary(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeUpdateMedicalVocabulary, Action<string> otherwise)
    {
        if (this == TranscribeUpdateMedicalVocabulary) onTranscribeUpdateMedicalVocabulary();
        else otherwise(Value);
    }
}
