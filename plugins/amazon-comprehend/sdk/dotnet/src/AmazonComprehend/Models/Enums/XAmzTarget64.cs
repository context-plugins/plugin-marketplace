using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget64>))]
public sealed record XAmzTarget64 : OpenStringEnum<XAmzTarget64>
{
    private XAmzTarget64(string value) : base(value)
    {
    }

    public static readonly XAmzTarget64 Comprehend20171127DescribeSentimentDetectionJob = new(
        "Comprehend_20171127.DescribeSentimentDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DescribeSentimentDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127DescribeSentimentDetectionJob => onComprehend20171127DescribeSentimentDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DescribeSentimentDetectionJob, Action<string> otherwise)
    {
        if (this ==
            Comprehend20171127DescribeSentimentDetectionJob) onComprehend20171127DescribeSentimentDetectionJob();
        else otherwise(Value);
    }
}
