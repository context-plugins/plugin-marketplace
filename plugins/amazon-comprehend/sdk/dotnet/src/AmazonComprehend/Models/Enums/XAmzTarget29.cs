using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget29>))]
public sealed record XAmzTarget29 : OpenStringEnum<XAmzTarget29>
{
    private XAmzTarget29(string value) : base(value)
    {
    }

    public static readonly XAmzTarget29 Comprehend20171127DescribeEntityRecognizer = new(
        "Comprehend_20171127.DescribeEntityRecognizer");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DescribeEntityRecognizer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127DescribeEntityRecognizer => onComprehend20171127DescribeEntityRecognizer(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DescribeEntityRecognizer, Action<string> otherwise)
    {
        if (this == Comprehend20171127DescribeEntityRecognizer) onComprehend20171127DescribeEntityRecognizer();
        else otherwise(Value);
    }
}
