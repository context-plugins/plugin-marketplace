using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget9>))]
public sealed record XAmzTarget9 : OpenStringEnum<XAmzTarget9>
{
    private XAmzTarget9(string value) : base(value)
    {
    }

    public static readonly XAmzTarget9 AwsStepFunctionsUpdateStateMachine = new("AWSStepFunctions.UpdateStateMachine");

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
