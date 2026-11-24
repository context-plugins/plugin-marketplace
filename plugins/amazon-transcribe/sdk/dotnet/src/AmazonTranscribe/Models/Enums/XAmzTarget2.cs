using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2>))]
public sealed record XAmzTarget2 : OpenStringEnum<XAmzTarget2>
{
    private XAmzTarget2(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2 TranscribeGetCallAnalyticsCategory = new("Transcribe.GetCallAnalyticsCategory");

    public TResult Match<TResult>(Func<TResult> onTranscribeGetCallAnalyticsCategory,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeGetCallAnalyticsCategory => onTranscribeGetCallAnalyticsCategory(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeGetCallAnalyticsCategory, Action<string> otherwise)
    {
        if (this == TranscribeGetCallAnalyticsCategory) onTranscribeGetCallAnalyticsCategory();
        else otherwise(Value);
    }
}
