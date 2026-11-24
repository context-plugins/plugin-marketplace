using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsStepFunctionsStateMachinesApi>))]
public sealed record XAmzTargetAwsStepFunctionsStateMachinesApi : OpenStringEnum<XAmzTargetAwsStepFunctionsStateMachinesApi>
{
    private XAmzTargetAwsStepFunctionsStateMachinesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsStepFunctionsStateMachinesApi AwsStepFunctionsCreateStateMachine = new(
        "AWSStepFunctions.CreateStateMachine");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsCreateStateMachine,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsCreateStateMachine => onAwsStepFunctionsCreateStateMachine(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsCreateStateMachine, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsCreateStateMachine) onAwsStepFunctionsCreateStateMachine();
        else otherwise(Value);
    }
}
