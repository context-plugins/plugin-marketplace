using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget50>))]
public sealed record XAmzTarget50 : OpenStringEnum<XAmzTarget50>
{
    private XAmzTarget50(string value) : base(value)
    {
    }

    public static readonly XAmzTarget50 Comprehend20171127DescribeEventsDetectionJob = new(
        "Comprehend_20171127.DescribeEventsDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DescribeEventsDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127DescribeEventsDetectionJob => onComprehend20171127DescribeEventsDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DescribeEventsDetectionJob, Action<string> otherwise)
    {
        if (this == Comprehend20171127DescribeEventsDetectionJob) onComprehend20171127DescribeEventsDetectionJob();
        else otherwise(Value);
    }
}
