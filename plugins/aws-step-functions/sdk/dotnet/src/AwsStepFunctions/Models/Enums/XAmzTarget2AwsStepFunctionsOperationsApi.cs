using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AwsStepFunctionsOperationsApi>))]
public sealed record XAmzTarget2AwsStepFunctionsOperationsApi : OpenStringEnum<XAmzTarget2AwsStepFunctionsOperationsApi>
{
    private XAmzTarget2AwsStepFunctionsOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AwsStepFunctionsOperationsApi AwsStepFunctionsTestState = new(
        "AWSStepFunctions.TestState");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsTestState, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsTestState => onAwsStepFunctionsTestState(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsTestState, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsTestState) onAwsStepFunctionsTestState();
        else otherwise(Value);
    }
}
