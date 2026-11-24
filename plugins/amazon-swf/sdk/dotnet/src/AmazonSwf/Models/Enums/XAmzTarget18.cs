using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget18>))]
public sealed record XAmzTarget18 : OpenStringEnum<XAmzTarget18>
{
    private XAmzTarget18(string value) : base(value)
    {
    }

    public static readonly XAmzTarget18 SimpleWorkflowServiceUndeprecateDomain = new(
        "SimpleWorkflowService.UndeprecateDomain");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceUndeprecateDomain,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SimpleWorkflowServiceUndeprecateDomain => onSimpleWorkflowServiceUndeprecateDomain(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceUndeprecateDomain, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceUndeprecateDomain) onSimpleWorkflowServiceUndeprecateDomain();
        else otherwise(Value);
    }
}
