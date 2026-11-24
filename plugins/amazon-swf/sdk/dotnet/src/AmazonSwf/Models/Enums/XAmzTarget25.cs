using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget25>))]
public sealed record XAmzTarget25 : OpenStringEnum<XAmzTarget25>
{
    private XAmzTarget25(string value) : base(value)
    {
    }

    public static readonly XAmzTarget25 SimpleWorkflowServiceRegisterWorkflowType = new(
        "SimpleWorkflowService.RegisterWorkflowType");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceRegisterWorkflowType,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SimpleWorkflowServiceRegisterWorkflowType => onSimpleWorkflowServiceRegisterWorkflowType(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceRegisterWorkflowType, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceRegisterWorkflowType) onSimpleWorkflowServiceRegisterWorkflowType();
        else otherwise(Value);
    }
}
