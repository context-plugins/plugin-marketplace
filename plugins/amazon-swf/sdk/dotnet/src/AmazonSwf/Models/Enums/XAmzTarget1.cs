using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1>))]
public sealed record XAmzTarget1 : OpenStringEnum<XAmzTarget1>
{
    private XAmzTarget1(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1 SimpleWorkflowServiceCountOpenWorkflowExecutions = new(
        "SimpleWorkflowService.CountOpenWorkflowExecutions");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceCountOpenWorkflowExecutions,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                SimpleWorkflowServiceCountOpenWorkflowExecutions => onSimpleWorkflowServiceCountOpenWorkflowExecutions(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceCountOpenWorkflowExecutions, Action<string> otherwise)
    {
        if (this ==
            SimpleWorkflowServiceCountOpenWorkflowExecutions) onSimpleWorkflowServiceCountOpenWorkflowExecutions();
        else otherwise(Value);
    }
}
