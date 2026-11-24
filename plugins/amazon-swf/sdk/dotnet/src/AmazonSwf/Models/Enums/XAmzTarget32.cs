using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget32>))]
public sealed record XAmzTarget32 : OpenStringEnum<XAmzTarget32>
{
    private XAmzTarget32(string value) : base(value)
    {
    }

    public static readonly XAmzTarget32 SimpleWorkflowServiceListClosedWorkflowExecutions = new(
        "SimpleWorkflowService.ListClosedWorkflowExecutions");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceListClosedWorkflowExecutions,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                SimpleWorkflowServiceListClosedWorkflowExecutions => onSimpleWorkflowServiceListClosedWorkflowExecutions(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceListClosedWorkflowExecutions, Action<string> otherwise)
    {
        if (this ==
            SimpleWorkflowServiceListClosedWorkflowExecutions) onSimpleWorkflowServiceListClosedWorkflowExecutions();
        else otherwise(Value);
    }
}
