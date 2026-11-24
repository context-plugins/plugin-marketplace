using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonTranscribeServiceOperationsApi>))]
public sealed record XAmzTarget1AmazonTranscribeServiceOperationsApi : OpenStringEnum<XAmzTarget1AmazonTranscribeServiceOperationsApi>
{
    private XAmzTarget1AmazonTranscribeServiceOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonTranscribeServiceOperationsApi TranscribeTagResource = new(
        "Transcribe.TagResource");

    public TResult Match<TResult>(Func<TResult> onTranscribeTagResource, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeTagResource => onTranscribeTagResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeTagResource, Action<string> otherwise)
    {
        if (this == TranscribeTagResource) onTranscribeTagResource();
        else otherwise(Value);
    }
}
