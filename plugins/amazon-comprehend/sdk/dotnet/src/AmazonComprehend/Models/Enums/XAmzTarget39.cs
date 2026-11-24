using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget39>))]
public sealed record XAmzTarget39 : OpenStringEnum<XAmzTarget39>
{
    private XAmzTarget39(string value) : base(value)
    {
    }

    public static readonly XAmzTarget39 Comprehend20171127DescribeDocumentClassificationJob = new(
        "Comprehend_20171127.DescribeDocumentClassificationJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DescribeDocumentClassificationJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127DescribeDocumentClassificationJob => onComprehend20171127DescribeDocumentClassificationJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DescribeDocumentClassificationJob, Action<string> otherwise)
    {
        if (this ==
            Comprehend20171127DescribeDocumentClassificationJob) onComprehend20171127DescribeDocumentClassificationJob();
        else otherwise(Value);
    }
}
