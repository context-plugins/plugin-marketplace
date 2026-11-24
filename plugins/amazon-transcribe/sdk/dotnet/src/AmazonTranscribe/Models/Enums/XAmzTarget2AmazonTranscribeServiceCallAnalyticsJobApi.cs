using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi>))]
public sealed record XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi : OpenStringEnum<XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi>
{
    private XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi TranscribeListCallAnalyticsJobs = new(
        "Transcribe.ListCallAnalyticsJobs");

    public TResult Match<TResult>(Func<TResult> onTranscribeListCallAnalyticsJobs, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeListCallAnalyticsJobs => onTranscribeListCallAnalyticsJobs(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeListCallAnalyticsJobs, Action<string> otherwise)
    {
        if (this == TranscribeListCallAnalyticsJobs) onTranscribeListCallAnalyticsJobs();
        else otherwise(Value);
    }
}
