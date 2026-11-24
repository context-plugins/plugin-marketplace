using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget26>))]
public sealed record XAmzTarget26 : OpenStringEnum<XAmzTarget26>
{
    private XAmzTarget26(string value) : base(value)
    {
    }

    public static readonly XAmzTarget26 SimpleWorkflowServiceDescribeDomain = new(
        "SimpleWorkflowService.DescribeDomain");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceDescribeDomain,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SimpleWorkflowServiceDescribeDomain => onSimpleWorkflowServiceDescribeDomain(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceDescribeDomain, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceDescribeDomain) onSimpleWorkflowServiceDescribeDomain();
        else otherwise(Value);
    }
}
