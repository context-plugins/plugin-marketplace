using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi>))]
public sealed record XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi : OpenStringEnum<XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi>
{
    private XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi SimpleWorkflowServiceDeleteActivityType = new(
        "SimpleWorkflowService.DeleteActivityType");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceDeleteActivityType,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SimpleWorkflowServiceDeleteActivityType => onSimpleWorkflowServiceDeleteActivityType(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceDeleteActivityType, Action<string> otherwise)
    {
        if (this == SimpleWorkflowServiceDeleteActivityType) onSimpleWorkflowServiceDeleteActivityType();
        else otherwise(Value);
    }
}
