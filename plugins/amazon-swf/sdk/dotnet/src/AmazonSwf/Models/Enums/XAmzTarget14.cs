using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget14>))]
public sealed record XAmzTarget14 : OpenStringEnum<XAmzTarget14>
{
    private XAmzTarget14(string value) : base(value)
    {
    }

    public static readonly XAmzTarget14 SimpleWorkflowServiceRespondDecisionTaskCompleted = new(
        "SimpleWorkflowService.RespondDecisionTaskCompleted");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceRespondDecisionTaskCompleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                SimpleWorkflowServiceRespondDecisionTaskCompleted => onSimpleWorkflowServiceRespondDecisionTaskCompleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceRespondDecisionTaskCompleted, Action<string> otherwise)
    {
        if (this ==
            SimpleWorkflowServiceRespondDecisionTaskCompleted) onSimpleWorkflowServiceRespondDecisionTaskCompleted();
        else otherwise(Value);
    }
}
