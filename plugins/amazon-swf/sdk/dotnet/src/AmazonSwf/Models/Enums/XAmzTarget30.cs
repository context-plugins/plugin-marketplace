using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget30>))]
public sealed record XAmzTarget30 : OpenStringEnum<XAmzTarget30>
{
    private XAmzTarget30(string value) : base(value)
    {
    }

    public static readonly XAmzTarget30 SimpleWorkflowServiceStartWorkflowExecution = new(
        "SimpleWorkflowService.StartWorkflowExecution");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceStartWorkflowExecution,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                SimpleWorkflowServiceStartWorkflowExecution => onSimpleWorkflowServiceStartWorkflowExecution(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceStartWorkflowExecution, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceStartWorkflowExecution) onSimpleWorkflowServiceStartWorkflowExecution();
        else otherwise(Value);
    }
}
