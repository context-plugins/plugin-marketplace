using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget5AwsStepFunctionsStateMachinesApi>))]
public sealed record XAmzTarget5AwsStepFunctionsStateMachinesApi : OpenStringEnum<XAmzTarget5AwsStepFunctionsStateMachinesApi>
{
    private XAmzTarget5AwsStepFunctionsStateMachinesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget5AwsStepFunctionsStateMachinesApi AwsStepFunctionsUpdateStateMachine = new(
        "AWSStepFunctions.UpdateStateMachine");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsUpdateStateMachine,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsUpdateStateMachine => onAwsStepFunctionsUpdateStateMachine(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsUpdateStateMachine, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsUpdateStateMachine) onAwsStepFunctionsUpdateStateMachine();
        else otherwise(Value);
    }
}
