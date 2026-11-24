using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget28>))]
public sealed record XAmzTarget28 : OpenStringEnum<XAmzTarget28>
{
    private XAmzTarget28(string value) : base(value)
    {
    }

    public static readonly XAmzTarget28 SimpleWorkflowServiceRegisterDomain = new(
        "SimpleWorkflowService.RegisterDomain");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceRegisterDomain,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SimpleWorkflowServiceRegisterDomain => onSimpleWorkflowServiceRegisterDomain(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceRegisterDomain, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceRegisterDomain) onSimpleWorkflowServiceRegisterDomain();
        else otherwise(Value);
    }
}
