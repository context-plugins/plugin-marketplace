using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget36>))]
public sealed record XAmzTarget36 : OpenStringEnum<XAmzTarget36>
{
    private XAmzTarget36(string value) : base(value)
    {
    }

    public static readonly XAmzTarget36 SimpleWorkflowServiceUntagResource = new("SimpleWorkflowService.UntagResource");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceUntagResource,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SimpleWorkflowServiceUntagResource => onSimpleWorkflowServiceUntagResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceUntagResource, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceUntagResource) onSimpleWorkflowServiceUntagResource();
        else otherwise(Value);
    }
}
