using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget8>))]
public sealed record XAmzTarget8 : OpenStringEnum<XAmzTarget8>
{
    private XAmzTarget8(string value) : base(value)
    {
    }

    public static readonly XAmzTarget8 SimpleWorkflowServicePollForDecisionTask = new(
        "SimpleWorkflowService.PollForDecisionTask");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServicePollForDecisionTask,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SimpleWorkflowServicePollForDecisionTask => onSimpleWorkflowServicePollForDecisionTask(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServicePollForDecisionTask, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServicePollForDecisionTask) onSimpleWorkflowServicePollForDecisionTask();
        else otherwise(Value);
    }
}
