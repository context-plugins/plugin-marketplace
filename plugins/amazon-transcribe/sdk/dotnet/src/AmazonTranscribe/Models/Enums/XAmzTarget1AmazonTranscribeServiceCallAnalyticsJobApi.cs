using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi>))]
public sealed record XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi : OpenStringEnum<XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi>
{
    private XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi TranscribeGetCallAnalyticsJob = new(
        "Transcribe.GetCallAnalyticsJob");

    public TResult Match<TResult>(Func<TResult> onTranscribeGetCallAnalyticsJob, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeGetCallAnalyticsJob => onTranscribeGetCallAnalyticsJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeGetCallAnalyticsJob, Action<string> otherwise)
    {
        if (this == TranscribeGetCallAnalyticsJob) onTranscribeGetCallAnalyticsJob();
        else otherwise(Value);
    }
}
