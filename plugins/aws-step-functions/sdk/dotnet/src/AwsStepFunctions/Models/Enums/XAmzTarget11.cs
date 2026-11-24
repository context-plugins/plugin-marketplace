using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget11>))]
public sealed record XAmzTarget11 : OpenStringEnum<XAmzTarget11>
{
    private XAmzTarget11(string value) : base(value)
    {
    }

    public static readonly XAmzTarget11 AwsStepFunctionsListExecutions = new("AWSStepFunctions.ListExecutions");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsListExecutions, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsListExecutions => onAwsStepFunctionsListExecutions(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsListExecutions, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsListExecutions) onAwsStepFunctionsListExecutions();
        else otherwise(Value);
    }
}
