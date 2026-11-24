using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonTranscribeServiceVocabulariesApi>))]
public sealed record XAmzTargetAmazonTranscribeServiceVocabulariesApi : OpenStringEnum<XAmzTargetAmazonTranscribeServiceVocabulariesApi>
{
    private XAmzTargetAmazonTranscribeServiceVocabulariesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonTranscribeServiceVocabulariesApi TranscribeCreateVocabulary = new(
        "Transcribe.CreateVocabulary");

    public TResult Match<TResult>(Func<TResult> onTranscribeCreateVocabulary, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeCreateVocabulary => onTranscribeCreateVocabulary(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeCreateVocabulary, Action<string> otherwise)
    {
        if (this == TranscribeCreateVocabulary) onTranscribeCreateVocabulary();
        else otherwise(Value);
    }
}
