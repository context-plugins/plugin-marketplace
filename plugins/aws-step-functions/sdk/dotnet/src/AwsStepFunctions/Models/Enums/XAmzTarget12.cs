using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget12>))]
public sealed record XAmzTarget12 : OpenStringEnum<XAmzTarget12>
{
    private XAmzTarget12(string value) : base(value)
    {
    }

    public static readonly XAmzTarget12 AwsStepFunctionsStartExecution = new("AWSStepFunctions.StartExecution");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsStartExecution, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsStartExecution => onAwsStepFunctionsStartExecution(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsStartExecution, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsStartExecution) onAwsStepFunctionsStartExecution();
        else otherwise(Value);
    }
}
