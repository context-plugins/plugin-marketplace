using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget37>))]
public sealed record XAmzTarget37 : OpenStringEnum<XAmzTarget37>
{
    private XAmzTarget37(string value) : base(value)
    {
    }

    public static readonly XAmzTarget37 Comprehend20171127DescribeResourcePolicy = new(
        "Comprehend_20171127.DescribeResourcePolicy");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DescribeResourcePolicy,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127DescribeResourcePolicy => onComprehend20171127DescribeResourcePolicy(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DescribeResourcePolicy, Action<string> otherwise)
    {
        if (this == Comprehend20171127DescribeResourcePolicy) onComprehend20171127DescribeResourcePolicy();
        else otherwise(Value);
    }
}
