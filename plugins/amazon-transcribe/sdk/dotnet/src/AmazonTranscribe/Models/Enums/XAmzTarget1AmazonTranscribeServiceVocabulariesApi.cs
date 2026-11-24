using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonTranscribeServiceVocabulariesApi>))]
public sealed record XAmzTarget1AmazonTranscribeServiceVocabulariesApi : OpenStringEnum<XAmzTarget1AmazonTranscribeServiceVocabulariesApi>
{
    private XAmzTarget1AmazonTranscribeServiceVocabulariesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonTranscribeServiceVocabulariesApi TranscribeDeleteVocabulary = new(
        "Transcribe.DeleteVocabulary");

    public TResult Match<TResult>(Func<TResult> onTranscribeDeleteVocabulary, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeDeleteVocabulary => onTranscribeDeleteVocabulary(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeDeleteVocabulary, Action<string> otherwise)
    {
        if (this == TranscribeDeleteVocabulary) onTranscribeDeleteVocabulary();
        else otherwise(Value);
    }
}
