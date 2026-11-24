using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget34>))]
public sealed record XAmzTarget34 : OpenStringEnum<XAmzTarget34>
{
    private XAmzTarget34(string value) : base(value)
    {
    }

    public static readonly XAmzTarget34 SimpleWorkflowServiceListTagsForResource = new(
        "SimpleWorkflowService.ListTagsForResource");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceListTagsForResource,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SimpleWorkflowServiceListTagsForResource => onSimpleWorkflowServiceListTagsForResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceListTagsForResource, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceListTagsForResource) onSimpleWorkflowServiceListTagsForResource();
        else otherwise(Value);
    }
}
