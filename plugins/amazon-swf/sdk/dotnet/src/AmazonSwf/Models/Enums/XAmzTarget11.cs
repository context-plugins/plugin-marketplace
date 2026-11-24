using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget11>))]
public sealed record XAmzTarget11 : OpenStringEnum<XAmzTarget11>
{
    private XAmzTarget11(string value) : base(value)
    {
    }

    public static readonly XAmzTarget11 SimpleWorkflowServiceRespondActivityTaskCanceled = new(
        "SimpleWorkflowService.RespondActivityTaskCanceled");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceRespondActivityTaskCanceled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                SimpleWorkflowServiceRespondActivityTaskCanceled => onSimpleWorkflowServiceRespondActivityTaskCanceled(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceRespondActivityTaskCanceled, Action<string> otherwise)
    {
        if (this ==
            SimpleWorkflowServiceRespondActivityTaskCanceled) onSimpleWorkflowServiceRespondActivityTaskCanceled();
        else otherwise(Value);
    }
}
