using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget69>))]
public sealed record XAmzTarget69 : OpenStringEnum<XAmzTarget69>
{
    private XAmzTarget69(string value) : base(value)
    {
    }

    public static readonly XAmzTarget69 Comprehend20171127ListTargetedSentimentDetectionJobs = new(
        "Comprehend_20171127.ListTargetedSentimentDetectionJobs");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127ListTargetedSentimentDetectionJobs,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127ListTargetedSentimentDetectionJobs => onComprehend20171127ListTargetedSentimentDetectionJobs(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127ListTargetedSentimentDetectionJobs, Action<string> otherwise)
    {
        if (this ==
            Comprehend20171127ListTargetedSentimentDetectionJobs) onComprehend20171127ListTargetedSentimentDetectionJobs();
        else otherwise(Value);
    }
}
