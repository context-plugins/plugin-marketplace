using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget68>))]
public sealed record XAmzTarget68 : OpenStringEnum<XAmzTarget68>
{
    private XAmzTarget68(string value) : base(value)
    {
    }

    public static readonly XAmzTarget68 Comprehend20171127DescribeTargetedSentimentDetectionJob = new(
        "Comprehend_20171127.DescribeTargetedSentimentDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DescribeTargetedSentimentDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127DescribeTargetedSentimentDetectionJob => onComprehend20171127DescribeTargetedSentimentDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DescribeTargetedSentimentDetectionJob, Action<string> otherwise)
    {
        if (this ==
            Comprehend20171127DescribeTargetedSentimentDetectionJob) onComprehend20171127DescribeTargetedSentimentDetectionJob();
        else otherwise(Value);
    }
}
