using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget18>))]
public sealed record XAmzTarget18 : OpenStringEnum<XAmzTarget18>
{
    private XAmzTarget18(string value) : base(value)
    {
    }

    public static readonly XAmzTarget18 AwsStepFunctionsGetExecutionHistory = new(
        "AWSStepFunctions.GetExecutionHistory");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsGetExecutionHistory,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsGetExecutionHistory => onAwsStepFunctionsGetExecutionHistory(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsGetExecutionHistory, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsGetExecutionHistory) onAwsStepFunctionsGetExecutionHistory();
        else otherwise(Value);
    }
}
