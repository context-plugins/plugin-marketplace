using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget17>))]
public sealed record XAmzTarget17 : OpenStringEnum<XAmzTarget17>
{
    private XAmzTarget17(string value) : base(value)
    {
    }

    public static readonly XAmzTarget17 SimpleWorkflowServiceUndeprecateActivityType = new(
        "SimpleWorkflowService.UndeprecateActivityType");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceUndeprecateActivityType,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                SimpleWorkflowServiceUndeprecateActivityType => onSimpleWorkflowServiceUndeprecateActivityType(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceUndeprecateActivityType, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceUndeprecateActivityType) onSimpleWorkflowServiceUndeprecateActivityType();
        else otherwise(Value);
    }
}
