using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonTranscribeServiceOperationsApi>))]
public sealed record XAmzTargetAmazonTranscribeServiceOperationsApi : OpenStringEnum<XAmzTargetAmazonTranscribeServiceOperationsApi>
{
    private XAmzTargetAmazonTranscribeServiceOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonTranscribeServiceOperationsApi TranscribeListTagsForResource = new(
        "Transcribe.ListTagsForResource");

    public TResult Match<TResult>(Func<TResult> onTranscribeListTagsForResource, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeListTagsForResource => onTranscribeListTagsForResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeListTagsForResource, Action<string> otherwise)
    {
        if (this == TranscribeListTagsForResource) onTranscribeListTagsForResource();
        else otherwise(Value);
    }
}
