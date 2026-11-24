using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4AmazonTranscribeServiceVocabulariesApi>))]
public sealed record XAmzTarget4AmazonTranscribeServiceVocabulariesApi : OpenStringEnum<XAmzTarget4AmazonTranscribeServiceVocabulariesApi>
{
    private XAmzTarget4AmazonTranscribeServiceVocabulariesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4AmazonTranscribeServiceVocabulariesApi TranscribeUpdateVocabulary = new(
        "Transcribe.UpdateVocabulary");

    public TResult Match<TResult>(Func<TResult> onTranscribeUpdateVocabulary, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeUpdateVocabulary => onTranscribeUpdateVocabulary(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeUpdateVocabulary, Action<string> otherwise)
    {
        if (this == TranscribeUpdateVocabulary) onTranscribeUpdateVocabulary();
        else otherwise(Value);
    }
}
