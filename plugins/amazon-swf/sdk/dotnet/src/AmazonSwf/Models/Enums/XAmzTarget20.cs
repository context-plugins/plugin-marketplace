using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget20>))]
public sealed record XAmzTarget20 : OpenStringEnum<XAmzTarget20>
{
    private XAmzTarget20(string value) : base(value)
    {
    }

    public static readonly XAmzTarget20 SimpleWorkflowServiceDescribeActivityType = new(
        "SimpleWorkflowService.DescribeActivityType");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceDescribeActivityType,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SimpleWorkflowServiceDescribeActivityType => onSimpleWorkflowServiceDescribeActivityType(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceDescribeActivityType, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceDescribeActivityType) onSimpleWorkflowServiceDescribeActivityType();
        else otherwise(Value);
    }
}
