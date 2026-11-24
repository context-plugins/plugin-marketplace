using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget46>))]
public sealed record XAmzTarget46 : OpenStringEnum<XAmzTarget46>
{
    private XAmzTarget46(string value) : base(value)
    {
    }

    public static readonly XAmzTarget46 Comprehend20171127DescribeEntitiesDetectionJob = new(
        "Comprehend_20171127.DescribeEntitiesDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DescribeEntitiesDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127DescribeEntitiesDetectionJob => onComprehend20171127DescribeEntitiesDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DescribeEntitiesDetectionJob, Action<string> otherwise)
    {
        if (this == Comprehend20171127DescribeEntitiesDetectionJob) onComprehend20171127DescribeEntitiesDetectionJob();
        else otherwise(Value);
    }
}
