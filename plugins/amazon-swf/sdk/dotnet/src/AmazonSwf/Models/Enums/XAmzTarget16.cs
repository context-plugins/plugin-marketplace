using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget16>))]
public sealed record XAmzTarget16 : OpenStringEnum<XAmzTarget16>
{
    private XAmzTarget16(string value) : base(value)
    {
    }

    public static readonly XAmzTarget16 SimpleWorkflowServiceTerminateWorkflowExecution = new(
        "SimpleWorkflowService.TerminateWorkflowExecution");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceTerminateWorkflowExecution,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                SimpleWorkflowServiceTerminateWorkflowExecution => onSimpleWorkflowServiceTerminateWorkflowExecution(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceTerminateWorkflowExecution, Action<string> otherwise)
    {
        if (this ==
            SimpleWorkflowServiceTerminateWorkflowExecution) onSimpleWorkflowServiceTerminateWorkflowExecution();
        else otherwise(Value);
    }
}
