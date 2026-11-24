using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AwsStepFunctionsStateMachinesApi>))]
public sealed record XAmzTarget3AwsStepFunctionsStateMachinesApi : OpenStringEnum<XAmzTarget3AwsStepFunctionsStateMachinesApi>
{
    private XAmzTarget3AwsStepFunctionsStateMachinesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AwsStepFunctionsStateMachinesApi AwsStepFunctionsDescribeStateMachineForExecution = new(
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
