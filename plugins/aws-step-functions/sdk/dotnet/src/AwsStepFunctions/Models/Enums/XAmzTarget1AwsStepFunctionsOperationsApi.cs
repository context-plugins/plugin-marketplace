using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AwsStepFunctionsOperationsApi>))]
public sealed record XAmzTarget1AwsStepFunctionsOperationsApi : OpenStringEnum<XAmzTarget1AwsStepFunctionsOperationsApi>
{
    private XAmzTarget1AwsStepFunctionsOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AwsStepFunctionsOperationsApi AwsStepFunctionsRedriveExecution = new(
        "AWSStepFunctions.RedriveExecution");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsRedriveExecution, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsRedriveExecution => onAwsStepFunctionsRedriveExecution(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsRedriveExecution, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsRedriveExecution) onAwsStepFunctionsRedriveExecution();
        else otherwise(Value);
    }
}
