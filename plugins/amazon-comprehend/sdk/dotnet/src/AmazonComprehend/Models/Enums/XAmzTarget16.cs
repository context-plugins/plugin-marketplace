using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget16>))]
public sealed record XAmzTarget16 : OpenStringEnum<XAmzTarget16>
{
    private XAmzTarget16(string value) : base(value)
    {
    }

    public static readonly XAmzTarget16 Comprehend20171127DescribeDataset = new("Comprehend_20171127.DescribeDataset");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DescribeDataset, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127DescribeDataset => onComprehend20171127DescribeDataset(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DescribeDataset, Action<string> otherwise)
    {
        if (this == Comprehend20171127DescribeDataset) onComprehend20171127DescribeDataset();
        else otherwise(Value);
    }
}
