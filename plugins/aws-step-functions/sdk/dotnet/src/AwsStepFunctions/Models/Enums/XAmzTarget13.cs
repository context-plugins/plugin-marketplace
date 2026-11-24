using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget13>))]
public sealed record XAmzTarget13 : OpenStringEnum<XAmzTarget13>
{
    private XAmzTarget13(string value) : base(value)
    {
    }

    public static readonly XAmzTarget13 AwsStepFunctionsStopExecution = new("AWSStepFunctions.StopExecution");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsStopExecution, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsStopExecution => onAwsStepFunctionsStopExecution(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsStopExecution, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsStopExecution) onAwsStepFunctionsStopExecution();
        else otherwise(Value);
    }
}
