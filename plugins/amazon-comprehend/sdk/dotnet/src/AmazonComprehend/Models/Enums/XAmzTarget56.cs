using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget56>))]
public sealed record XAmzTarget56 : OpenStringEnum<XAmzTarget56>
{
    private XAmzTarget56(string value) : base(value)
    {
    }

    public static readonly XAmzTarget56 Comprehend20171127DescribeKeyPhrasesDetectionJob = new(
        "Comprehend_20171127.DescribeKeyPhrasesDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DescribeKeyPhrasesDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127DescribeKeyPhrasesDetectionJob => onComprehend20171127DescribeKeyPhrasesDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DescribeKeyPhrasesDetectionJob, Action<string> otherwise)
    {
        if (this ==
            Comprehend20171127DescribeKeyPhrasesDetectionJob) onComprehend20171127DescribeKeyPhrasesDetectionJob();
        else otherwise(Value);
    }
}
