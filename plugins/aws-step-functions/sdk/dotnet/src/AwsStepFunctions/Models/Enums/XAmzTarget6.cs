using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget6>))]
public sealed record XAmzTarget6 : OpenStringEnum<XAmzTarget6>
{
    private XAmzTarget6(string value) : base(value)
    {
    }

    public static readonly XAmzTarget6 AwsStepFunctionsDescribeStateMachine = new(
        "AWSStepFunctions.DescribeStateMachine");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsDescribeStateMachine,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsDescribeStateMachine => onAwsStepFunctionsDescribeStateMachine(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsDescribeStateMachine, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsDescribeStateMachine) onAwsStepFunctionsDescribeStateMachine();
        else otherwise(Value);
    }
}
