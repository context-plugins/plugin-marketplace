using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1>))]
public sealed record XAmzTarget1 : OpenStringEnum<XAmzTarget1>
{
    private XAmzTarget1(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1 TranscribeDeleteCallAnalyticsCategory = new(
        "Transcribe.DeleteCallAnalyticsCategory");

    public TResult Match<TResult>(Func<TResult> onTranscribeDeleteCallAnalyticsCategory,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeDeleteCallAnalyticsCategory => onTranscribeDeleteCallAnalyticsCategory(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeDeleteCallAnalyticsCategory, Action<string> otherwise)
    {
        if (this == TranscribeDeleteCallAnalyticsCategory) onTranscribeDeleteCallAnalyticsCategory();
        else otherwise(Value);
    }
}
