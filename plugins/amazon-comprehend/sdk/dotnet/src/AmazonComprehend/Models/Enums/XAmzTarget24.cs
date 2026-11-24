using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget24>))]
public sealed record XAmzTarget24 : OpenStringEnum<XAmzTarget24>
{
    private XAmzTarget24(string value) : base(value)
    {
    }

    public static readonly XAmzTarget24 Comprehend20171127DescribeEndpoint = new(
        "Comprehend_20171127.DescribeEndpoint");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DescribeEndpoint,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127DescribeEndpoint => onComprehend20171127DescribeEndpoint(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DescribeEndpoint, Action<string> otherwise)
    {
        if (this == Comprehend20171127DescribeEndpoint) onComprehend20171127DescribeEndpoint();
        else otherwise(Value);
    }
}
