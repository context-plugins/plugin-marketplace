using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget>))]
public sealed record XAmzTarget : OpenStringEnum<XAmzTarget>
{
    private XAmzTarget(string value) : base(value)
    {
    }

    public static readonly XAmzTarget SimpleWorkflowServiceCountClosedWorkflowExecutions = new(
        "SimpleWorkflowService.CountClosedWorkflowExecutions");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceCountClosedWorkflowExecutions,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                SimpleWorkflowServiceCountClosedWorkflowExecutions => onSimpleWorkflowServiceCountClosedWorkflowExecutions(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceCountClosedWorkflowExecutions, Action<string> otherwise)
    {
        if (this ==
            SimpleWorkflowServiceCountClosedWorkflowExecutions) onSimpleWorkflowServiceCountClosedWorkflowExecutions();
        else otherwise(Value);
    }
}
