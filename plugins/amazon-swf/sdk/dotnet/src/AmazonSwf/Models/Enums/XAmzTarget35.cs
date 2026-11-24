using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget35>))]
public sealed record XAmzTarget35 : OpenStringEnum<XAmzTarget35>
{
    private XAmzTarget35(string value) : base(value)
    {
    }

    public static readonly XAmzTarget35 SimpleWorkflowServiceTagResource = new("SimpleWorkflowService.TagResource");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceTagResource, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SimpleWorkflowServiceTagResource => onSimpleWorkflowServiceTagResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceTagResource, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceTagResource) onSimpleWorkflowServiceTagResource();
        else otherwise(Value);
    }
}
