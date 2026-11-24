using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget13>))]
public sealed record XAmzTarget13 : OpenStringEnum<XAmzTarget13>
{
    private XAmzTarget13(string value) : base(value)
    {
    }

    public static readonly XAmzTarget13 SimpleWorkflowServiceRespondActivityTaskFailed = new(
        "SimpleWorkflowService.RespondActivityTaskFailed");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceRespondActivityTaskFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                SimpleWorkflowServiceRespondActivityTaskFailed => onSimpleWorkflowServiceRespondActivityTaskFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceRespondActivityTaskFailed, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceRespondActivityTaskFailed) onSimpleWorkflowServiceRespondActivityTaskFailed();
        else otherwise(Value);
    }
}
