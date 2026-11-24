using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget7>))]
public sealed record XAmzTarget7 : OpenStringEnum<XAmzTarget7>
{
    private XAmzTarget7(string value) : base(value)
    {
    }

    public static readonly XAmzTarget7 AwsStepFunctionsDescribeStateMachineForExecution = new(
        "AWSStepFunctions.DescribeStateMachineForExecution");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsDescribeStateMachineForExecution,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                AwsStepFunctionsDescribeStateMachineForExecution => onAwsStepFunctionsDescribeStateMachineForExecution(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsDescribeStateMachineForExecution, Action<string> otherwise)
    {
        if (this ==
            AwsStepFunctionsDescribeStateMachineForExecution) onAwsStepFunctionsDescribeStateMachineForExecution();
        else otherwise(Value);
    }
}
