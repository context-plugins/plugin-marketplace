using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget70>))]
public sealed record XAmzTarget70 : OpenStringEnum<XAmzTarget70>
{
    private XAmzTarget70(string value) : base(value)
    {
    }

    public static readonly XAmzTarget70 Comprehend20171127StartTargetedSentimentDetectionJob = new(
        "Comprehend_20171127.StartTargetedSentimentDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127StartTargetedSentimentDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127StartTargetedSentimentDetectionJob => onComprehend20171127StartTargetedSentimentDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127StartTargetedSentimentDetectionJob, Action<string> otherwise)
    {
        if (this ==
            Comprehend20171127StartTargetedSentimentDetectionJob) onComprehend20171127StartTargetedSentimentDetectionJob();
        else otherwise(Value);
    }
}
