using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonTranscribeServiceOperationsApi>))]
public sealed record XAmzTarget2AmazonTranscribeServiceOperationsApi : OpenStringEnum<XAmzTarget2AmazonTranscribeServiceOperationsApi>
{
    private XAmzTarget2AmazonTranscribeServiceOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonTranscribeServiceOperationsApi TranscribeUntagResource = new(
        "Transcribe.UntagResource");

    public TResult Match<TResult>(Func<TResult> onTranscribeUntagResource, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeUntagResource => onTranscribeUntagResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeUntagResource, Action<string> otherwise)
    {
        if (this == TranscribeUntagResource) onTranscribeUntagResource();
        else otherwise(Value);
    }
}
