using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget8>))]
public sealed record XAmzTarget8 : OpenStringEnum<XAmzTarget8>
{
    private XAmzTarget8(string value) : base(value)
    {
    }

    public static readonly XAmzTarget8 AwsStepFunctionsListStateMachines = new("AWSStepFunctions.ListStateMachines");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsListStateMachines, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsListStateMachines => onAwsStepFunctionsListStateMachines(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsListStateMachines, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsListStateMachines) onAwsStepFunctionsListStateMachines();
        else otherwise(Value);
    }
}
