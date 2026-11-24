using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3>))]
public sealed record XAmzTarget3 : OpenStringEnum<XAmzTarget3>
{
    private XAmzTarget3(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3 SimpleWorkflowServiceCountPendingDecisionTasks = new(
        "SimpleWorkflowService.CountPendingDecisionTasks");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceCountPendingDecisionTasks,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                SimpleWorkflowServiceCountPendingDecisionTasks => onSimpleWorkflowServiceCountPendingDecisionTasks(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceCountPendingDecisionTasks, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceCountPendingDecisionTasks) onSimpleWorkflowServiceCountPendingDecisionTasks();
        else otherwise(Value);
    }
}
