using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget21>))]
public sealed record XAmzTarget21 : OpenStringEnum<XAmzTarget21>
{
    private XAmzTarget21(string value) : base(value)
    {
    }

    public static readonly XAmzTarget21 SimpleWorkflowServiceListActivityTypes = new(
        "SimpleWorkflowService.ListActivityTypes");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceListActivityTypes,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SimpleWorkflowServiceListActivityTypes => onSimpleWorkflowServiceListActivityTypes(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceListActivityTypes, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceListActivityTypes) onSimpleWorkflowServiceListActivityTypes();
        else otherwise(Value);
    }
}
