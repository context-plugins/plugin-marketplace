using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget7>))]
public sealed record XAmzTarget7 : OpenStringEnum<XAmzTarget7>
{
    private XAmzTarget7(string value) : base(value)
    {
    }

    public static readonly XAmzTarget7 SimpleWorkflowServicePollForActivityTask = new(
        "SimpleWorkflowService.PollForActivityTask");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServicePollForActivityTask,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SimpleWorkflowServicePollForActivityTask => onSimpleWorkflowServicePollForActivityTask(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServicePollForActivityTask, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServicePollForActivityTask) onSimpleWorkflowServicePollForActivityTask();
        else otherwise(Value);
    }
}
