using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget6>))]
public sealed record XAmzTarget6 : OpenStringEnum<XAmzTarget6>
{
    private XAmzTarget6(string value) : base(value)
    {
    }

    public static readonly XAmzTarget6 SimpleWorkflowServiceDeprecateWorkflowType = new(
        "SimpleWorkflowService.DeprecateWorkflowType");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceDeprecateWorkflowType,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SimpleWorkflowServiceDeprecateWorkflowType => onSimpleWorkflowServiceDeprecateWorkflowType(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceDeprecateWorkflowType, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceDeprecateWorkflowType) onSimpleWorkflowServiceDeprecateWorkflowType();
        else otherwise(Value);
    }
}
