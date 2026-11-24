using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4>))]
public sealed record XAmzTarget4 : OpenStringEnum<XAmzTarget4>
{
    private XAmzTarget4(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4 SimpleWorkflowServiceDeprecateActivityType = new(
        "SimpleWorkflowService.DeprecateActivityType");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceDeprecateActivityType,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SimpleWorkflowServiceDeprecateActivityType => onSimpleWorkflowServiceDeprecateActivityType(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceDeprecateActivityType, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceDeprecateActivityType) onSimpleWorkflowServiceDeprecateActivityType();
        else otherwise(Value);
    }
}
