using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget20>))]
public sealed record XAmzTarget20 : OpenStringEnum<XAmzTarget20>
{
    private XAmzTarget20(string value) : base(value)
    {
    }

    public static readonly XAmzTarget20 Comprehend20171127DescribeDocumentClassifier = new(
        "Comprehend_20171127.DescribeDocumentClassifier");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DescribeDocumentClassifier,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127DescribeDocumentClassifier => onComprehend20171127DescribeDocumentClassifier(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DescribeDocumentClassifier, Action<string> otherwise)
    {
        if (this == Comprehend20171127DescribeDocumentClassifier) onComprehend20171127DescribeDocumentClassifier();
        else otherwise(Value);
    }
}
