using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget12>))]
public sealed record XAmzTarget12 : OpenStringEnum<XAmzTarget12>
{
    private XAmzTarget12(string value) : base(value)
    {
    }

    public static readonly XAmzTarget12 SimpleWorkflowServiceRespondActivityTaskCompleted = new(
        "SimpleWorkflowService.RespondActivityTaskCompleted");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceRespondActivityTaskCompleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                SimpleWorkflowServiceRespondActivityTaskCompleted => onSimpleWorkflowServiceRespondActivityTaskCompleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceRespondActivityTaskCompleted, Action<string> otherwise)
    {
        if (this ==
            SimpleWorkflowServiceRespondActivityTaskCompleted) onSimpleWorkflowServiceRespondActivityTaskCompleted();
        else otherwise(Value);
    }
}
