using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget27>))]
public sealed record XAmzTarget27 : OpenStringEnum<XAmzTarget27>
{
    private XAmzTarget27(string value) : base(value)
    {
    }

    public static readonly XAmzTarget27 SimpleWorkflowServiceListDomains = new("SimpleWorkflowService.ListDomains");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceListDomains, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SimpleWorkflowServiceListDomains => onSimpleWorkflowServiceListDomains(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceListDomains, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceListDomains) onSimpleWorkflowServiceListDomains();
        else otherwise(Value);
    }
}
