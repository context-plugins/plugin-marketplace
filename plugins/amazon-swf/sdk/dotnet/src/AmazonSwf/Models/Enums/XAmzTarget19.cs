using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget19>))]
public sealed record XAmzTarget19 : OpenStringEnum<XAmzTarget19>
{
    private XAmzTarget19(string value) : base(value)
    {
    }

    public static readonly XAmzTarget19 SimpleWorkflowServiceUndeprecateWorkflowType = new(
        "SimpleWorkflowService.UndeprecateWorkflowType");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceUndeprecateWorkflowType,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                SimpleWorkflowServiceUndeprecateWorkflowType => onSimpleWorkflowServiceUndeprecateWorkflowType(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceUndeprecateWorkflowType, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceUndeprecateWorkflowType) onSimpleWorkflowServiceUndeprecateWorkflowType();
        else otherwise(Value);
    }
}
