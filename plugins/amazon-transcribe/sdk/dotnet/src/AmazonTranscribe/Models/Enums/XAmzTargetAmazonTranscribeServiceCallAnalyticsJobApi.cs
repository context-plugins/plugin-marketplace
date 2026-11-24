using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi>))]
public sealed record XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi : OpenStringEnum<XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi>
{
    private XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi TranscribeDeleteCallAnalyticsJob = new(
        "Transcribe.DeleteCallAnalyticsJob");

    public TResult Match<TResult>(Func<TResult> onTranscribeDeleteCallAnalyticsJob, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeDeleteCallAnalyticsJob => onTranscribeDeleteCallAnalyticsJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeDeleteCallAnalyticsJob, Action<string> otherwise)
    {
        if (this == TranscribeDeleteCallAnalyticsJob) onTranscribeDeleteCallAnalyticsJob();
        else otherwise(Value);
    }
}
