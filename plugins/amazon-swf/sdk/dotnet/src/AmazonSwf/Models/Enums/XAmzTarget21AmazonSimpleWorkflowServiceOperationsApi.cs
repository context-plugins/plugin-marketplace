using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi>))]
public sealed record XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi : OpenStringEnum<XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi>
{
    private XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi SimpleWorkflowServiceDeleteWorkflowType = new(
        "SimpleWorkflowService.DeleteWorkflowType");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceDeleteWorkflowType,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SimpleWorkflowServiceDeleteWorkflowType => onSimpleWorkflowServiceDeleteWorkflowType(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceDeleteWorkflowType, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceDeleteWorkflowType) onSimpleWorkflowServiceDeleteWorkflowType();
        else otherwise(Value);
    }
}
