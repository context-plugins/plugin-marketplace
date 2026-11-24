using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget15>))]
public sealed record XAmzTarget15 : OpenStringEnum<XAmzTarget15>
{
    private XAmzTarget15(string value) : base(value)
    {
    }

    public static readonly XAmzTarget15 SimpleWorkflowServiceSignalWorkflowExecution = new(
        "SimpleWorkflowService.SignalWorkflowExecution");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceSignalWorkflowExecution,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                SimpleWorkflowServiceSignalWorkflowExecution => onSimpleWorkflowServiceSignalWorkflowExecution(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceSignalWorkflowExecution, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceSignalWorkflowExecution) onSimpleWorkflowServiceSignalWorkflowExecution();
        else otherwise(Value);
    }
}
