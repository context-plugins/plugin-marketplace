using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget5>))]
public sealed record XAmzTarget5 : OpenStringEnum<XAmzTarget5>
{
    private XAmzTarget5(string value) : base(value)
    {
    }

    public static readonly XAmzTarget5 SimpleWorkflowServiceDeprecateDomain = new(
        "SimpleWorkflowService.DeprecateDomain");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceDeprecateDomain,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SimpleWorkflowServiceDeprecateDomain => onSimpleWorkflowServiceDeprecateDomain(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceDeprecateDomain, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceDeprecateDomain) onSimpleWorkflowServiceDeprecateDomain();
        else otherwise(Value);
    }
}
