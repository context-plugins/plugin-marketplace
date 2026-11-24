using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget5>))]
public sealed record XAmzTarget5 : OpenStringEnum<XAmzTarget5>
{
    private XAmzTarget5(string value) : base(value)
    {
    }

    public static readonly XAmzTarget5 AwsStepFunctionsDeleteStateMachine = new("AWSStepFunctions.DeleteStateMachine");

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
