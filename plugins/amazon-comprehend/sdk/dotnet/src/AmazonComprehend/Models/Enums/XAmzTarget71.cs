using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget71>))]
public sealed record XAmzTarget71 : OpenStringEnum<XAmzTarget71>
{
    private XAmzTarget71(string value) : base(value)
    {
    }

    public static readonly XAmzTarget71 Comprehend20171127StopTargetedSentimentDetectionJob = new(
        "Comprehend_20171127.StopTargetedSentimentDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127StopTargetedSentimentDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127StopTargetedSentimentDetectionJob => onComprehend20171127StopTargetedSentimentDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127StopTargetedSentimentDetectionJob, Action<string> otherwise)
    {
        if (this ==
            Comprehend20171127StopTargetedSentimentDetectionJob) onComprehend20171127StopTargetedSentimentDetectionJob();
        else otherwise(Value);
    }
}
