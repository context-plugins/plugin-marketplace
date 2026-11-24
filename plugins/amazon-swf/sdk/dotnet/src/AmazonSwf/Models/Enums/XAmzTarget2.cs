using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2>))]
public sealed record XAmzTarget2 : OpenStringEnum<XAmzTarget2>
{
    private XAmzTarget2(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2 SimpleWorkflowServiceCountPendingActivityTasks = new(
        "SimpleWorkflowService.CountPendingActivityTasks");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceCountPendingActivityTasks,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                SimpleWorkflowServiceCountPendingActivityTasks => onSimpleWorkflowServiceCountPendingActivityTasks(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceCountPendingActivityTasks, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceCountPendingActivityTasks) onSimpleWorkflowServiceCountPendingActivityTasks();
        else otherwise(Value);
    }
}
