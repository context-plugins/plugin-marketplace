using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget72>))]
public sealed record XAmzTarget72 : OpenStringEnum<XAmzTarget72>
{
    private XAmzTarget72(string value) : base(value)
    {
    }

    public static readonly XAmzTarget72 Comprehend20171127DescribeTopicsDetectionJob = new(
        "Comprehend_20171127.DescribeTopicsDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DescribeTopicsDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127DescribeTopicsDetectionJob => onComprehend20171127DescribeTopicsDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DescribeTopicsDetectionJob, Action<string> otherwise)
    {
        if (this == Comprehend20171127DescribeTopicsDetectionJob) onComprehend20171127DescribeTopicsDetectionJob();
        else otherwise(Value);
    }
}
