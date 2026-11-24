using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget31>))]
public sealed record XAmzTarget31 : OpenStringEnum<XAmzTarget31>
{
    private XAmzTarget31(string value) : base(value)
    {
    }

    public static readonly XAmzTarget31 SimpleWorkflowServiceGetWorkflowExecutionHistory = new(
        "SimpleWorkflowService.GetWorkflowExecutionHistory");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceGetWorkflowExecutionHistory,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                SimpleWorkflowServiceGetWorkflowExecutionHistory => onSimpleWorkflowServiceGetWorkflowExecutionHistory(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceGetWorkflowExecutionHistory, Action<string> otherwise)
    {
        if (this ==
            SimpleWorkflowServiceGetWorkflowExecutionHistory) onSimpleWorkflowServiceGetWorkflowExecutionHistory();
        else otherwise(Value);
    }
}
