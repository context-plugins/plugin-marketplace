using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget10>))]
public sealed record XAmzTarget10 : OpenStringEnum<XAmzTarget10>
{
    private XAmzTarget10(string value) : base(value)
    {
    }

    public static readonly XAmzTarget10 AwsStepFunctionsDescribeExecution = new("AWSStepFunctions.DescribeExecution");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsDescribeExecution, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsDescribeExecution => onAwsStepFunctionsDescribeExecution(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsDescribeExecution, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsDescribeExecution) onAwsStepFunctionsDescribeExecution();
        else otherwise(Value);
    }
}
