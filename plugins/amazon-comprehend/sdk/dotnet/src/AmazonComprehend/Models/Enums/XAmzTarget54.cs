using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget54>))]
public sealed record XAmzTarget54 : OpenStringEnum<XAmzTarget54>
{
    private XAmzTarget54(string value) : base(value)
    {
    }

    public static readonly XAmzTarget54 Comprehend20171127DescribeFlywheelIteration = new(
        "Comprehend_20171127.DescribeFlywheelIteration");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DescribeFlywheelIteration,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127DescribeFlywheelIteration => onComprehend20171127DescribeFlywheelIteration(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DescribeFlywheelIteration, Action<string> otherwise)
    {
        if (this == Comprehend20171127DescribeFlywheelIteration) onComprehend20171127DescribeFlywheelIteration();
        else otherwise(Value);
    }
}
