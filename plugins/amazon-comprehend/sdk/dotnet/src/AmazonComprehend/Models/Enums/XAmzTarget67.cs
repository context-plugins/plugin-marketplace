using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget67>))]
public sealed record XAmzTarget67 : OpenStringEnum<XAmzTarget67>
{
    private XAmzTarget67(string value) : base(value)
    {
    }

    public static readonly XAmzTarget67 Comprehend20171127StopSentimentDetectionJob = new(
        "Comprehend_20171127.StopSentimentDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127StopSentimentDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127StopSentimentDetectionJob => onComprehend20171127StopSentimentDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127StopSentimentDetectionJob, Action<string> otherwise)
    {
        if (this == Comprehend20171127StopSentimentDetectionJob) onComprehend20171127StopSentimentDetectionJob();
        else otherwise(Value);
    }
}
