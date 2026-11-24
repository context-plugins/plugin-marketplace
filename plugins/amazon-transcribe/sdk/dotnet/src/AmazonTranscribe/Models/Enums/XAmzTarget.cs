using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget>))]
public sealed record XAmzTarget : OpenStringEnum<XAmzTarget>
{
    private XAmzTarget(string value) : base(value)
    {
    }

    public static readonly XAmzTarget TranscribeCreateCallAnalyticsCategory = new(
        "Transcribe.CreateCallAnalyticsCategory");

    public TResult Match<TResult>(Func<TResult> onTranscribeCreateCallAnalyticsCategory,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeCreateCallAnalyticsCategory => onTranscribeCreateCallAnalyticsCategory(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeCreateCallAnalyticsCategory, Action<string> otherwise)
    {
        if (this == TranscribeCreateCallAnalyticsCategory) onTranscribeCreateCallAnalyticsCategory();
        else otherwise(Value);
    }
}
