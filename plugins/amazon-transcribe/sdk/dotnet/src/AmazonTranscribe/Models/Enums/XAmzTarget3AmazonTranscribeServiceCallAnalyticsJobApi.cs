using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi>))]
public sealed record XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi : OpenStringEnum<XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi>
{
    private XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi TranscribeStartCallAnalyticsJob = new(
        "Transcribe.StartCallAnalyticsJob");

    public TResult Match<TResult>(Func<TResult> onTranscribeStartCallAnalyticsJob, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeStartCallAnalyticsJob => onTranscribeStartCallAnalyticsJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeStartCallAnalyticsJob, Action<string> otherwise)
    {
        if (this == TranscribeStartCallAnalyticsJob) onTranscribeStartCallAnalyticsJob();
        else otherwise(Value);
    }
}
