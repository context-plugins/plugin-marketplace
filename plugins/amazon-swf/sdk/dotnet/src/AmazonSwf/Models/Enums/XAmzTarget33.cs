using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget33>))]
public sealed record XAmzTarget33 : OpenStringEnum<XAmzTarget33>
{
    private XAmzTarget33(string value) : base(value)
    {
    }

    public static readonly XAmzTarget33 SimpleWorkflowServiceListOpenWorkflowExecutions = new(
        "SimpleWorkflowService.ListOpenWorkflowExecutions");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceListOpenWorkflowExecutions,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                SimpleWorkflowServiceListOpenWorkflowExecutions => onSimpleWorkflowServiceListOpenWorkflowExecutions(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceListOpenWorkflowExecutions, Action<string> otherwise)
    {
        if (this ==
            SimpleWorkflowServiceListOpenWorkflowExecutions) onSimpleWorkflowServiceListOpenWorkflowExecutions();
        else otherwise(Value);
    }
}
