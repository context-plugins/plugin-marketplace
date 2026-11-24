using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget29>))]
public sealed record XAmzTarget29 : OpenStringEnum<XAmzTarget29>
{
    private XAmzTarget29(string value) : base(value)
    {
    }

    public static readonly XAmzTarget29 SimpleWorkflowServiceDescribeWorkflowExecution = new(
        "SimpleWorkflowService.DescribeWorkflowExecution");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceDescribeWorkflowExecution,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                SimpleWorkflowServiceDescribeWorkflowExecution => onSimpleWorkflowServiceDescribeWorkflowExecution(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceDescribeWorkflowExecution, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceDescribeWorkflowExecution) onSimpleWorkflowServiceDescribeWorkflowExecution();
        else otherwise(Value);
    }
}
