using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AwsStepFunctionsStateMachinesApi>))]
public sealed record XAmzTarget1AwsStepFunctionsStateMachinesApi : OpenStringEnum<XAmzTarget1AwsStepFunctionsStateMachinesApi>
{
    private XAmzTarget1AwsStepFunctionsStateMachinesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AwsStepFunctionsStateMachinesApi AwsStepFunctionsDeleteStateMachine = new(
        "AWSStepFunctions.DeleteStateMachine");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsDeleteStateMachine,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsDeleteStateMachine => onAwsStepFunctionsDeleteStateMachine(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsDeleteStateMachine, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsDeleteStateMachine) onAwsStepFunctionsDeleteStateMachine();
        else otherwise(Value);
    }
}
