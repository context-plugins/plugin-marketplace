using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonTranscribeServiceVocabulariesApi>))]
public sealed record XAmzTarget3AmazonTranscribeServiceVocabulariesApi : OpenStringEnum<XAmzTarget3AmazonTranscribeServiceVocabulariesApi>
{
    private XAmzTarget3AmazonTranscribeServiceVocabulariesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonTranscribeServiceVocabulariesApi TranscribeListVocabularies = new(
        "Transcribe.ListVocabularies");

    public TResult Match<TResult>(Func<TResult> onTranscribeListVocabularies, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeListVocabularies => onTranscribeListVocabularies(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeListVocabularies, Action<string> otherwise)
    {
        if (this == TranscribeListVocabularies) onTranscribeListVocabularies();
        else otherwise(Value);
    }
}
