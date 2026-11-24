using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4>))]
public sealed record XAmzTarget4 : OpenStringEnum<XAmzTarget4>
{
    private XAmzTarget4(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4 TranscribeUpdateCallAnalyticsCategory = new(
        "Transcribe.UpdateCallAnalyticsCategory");

    public TResult Match<TResult>(Func<TResult> onTranscribeUpdateCallAnalyticsCategory,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeUpdateCallAnalyticsCategory => onTranscribeUpdateCallAnalyticsCategory(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeUpdateCallAnalyticsCategory, Action<string> otherwise)
    {
        if (this == TranscribeUpdateCallAnalyticsCategory) onTranscribeUpdateCallAnalyticsCategory();
        else otherwise(Value);
    }
}
