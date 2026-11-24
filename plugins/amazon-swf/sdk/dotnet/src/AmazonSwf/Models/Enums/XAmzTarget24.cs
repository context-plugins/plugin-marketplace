using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget24>))]
public sealed record XAmzTarget24 : OpenStringEnum<XAmzTarget24>
{
    private XAmzTarget24(string value) : base(value)
    {
    }

    public static readonly XAmzTarget24 SimpleWorkflowServiceListWorkflowTypes = new(
        "SimpleWorkflowService.ListWorkflowTypes");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceListWorkflowTypes,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SimpleWorkflowServiceListWorkflowTypes => onSimpleWorkflowServiceListWorkflowTypes(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceListWorkflowTypes, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceListWorkflowTypes) onSimpleWorkflowServiceListWorkflowTypes();
        else otherwise(Value);
    }
}
