using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget23>))]
public sealed record XAmzTarget23 : OpenStringEnum<XAmzTarget23>
{
    private XAmzTarget23(string value) : base(value)
    {
    }

    public static readonly XAmzTarget23 SimpleWorkflowServiceDescribeWorkflowType = new(
        "SimpleWorkflowService.DescribeWorkflowType");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceDescribeWorkflowType,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SimpleWorkflowServiceDescribeWorkflowType => onSimpleWorkflowServiceDescribeWorkflowType(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceDescribeWorkflowType, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceDescribeWorkflowType) onSimpleWorkflowServiceDescribeWorkflowType();
        else otherwise(Value);
    }
}
