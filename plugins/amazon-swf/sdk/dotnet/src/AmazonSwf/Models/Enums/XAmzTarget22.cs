using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget22>))]
public sealed record XAmzTarget22 : OpenStringEnum<XAmzTarget22>
{
    private XAmzTarget22(string value) : base(value)
    {
    }

    public static readonly XAmzTarget22 SimpleWorkflowServiceRegisterActivityType = new(
        "SimpleWorkflowService.RegisterActivityType");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceRegisterActivityType,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SimpleWorkflowServiceRegisterActivityType => onSimpleWorkflowServiceRegisterActivityType(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceRegisterActivityType, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceRegisterActivityType) onSimpleWorkflowServiceRegisterActivityType();
        else otherwise(Value);
    }
}
