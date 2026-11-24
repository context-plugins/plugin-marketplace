using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget10>))]
public sealed record XAmzTarget10 : OpenStringEnum<XAmzTarget10>
{
    private XAmzTarget10(string value) : base(value)
    {
    }

    public static readonly XAmzTarget10 SimpleWorkflowServiceRequestCancelWorkflowExecution = new(
        "SimpleWorkflowService.RequestCancelWorkflowExecution");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceRequestCancelWorkflowExecution,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                SimpleWorkflowServiceRequestCancelWorkflowExecution => onSimpleWorkflowServiceRequestCancelWorkflowExecution(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceRequestCancelWorkflowExecution, Action<string> otherwise)
    {
        if (this ==
            SimpleWorkflowServiceRequestCancelWorkflowExecution) onSimpleWorkflowServiceRequestCancelWorkflowExecution();
        else otherwise(Value);
    }
}
