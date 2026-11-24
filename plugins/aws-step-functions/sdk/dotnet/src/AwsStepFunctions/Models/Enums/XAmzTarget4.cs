using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4>))]
public sealed record XAmzTarget4 : OpenStringEnum<XAmzTarget4>
{
    private XAmzTarget4(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4 AwsStepFunctionsCreateStateMachine = new("AWSStepFunctions.CreateStateMachine");

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
