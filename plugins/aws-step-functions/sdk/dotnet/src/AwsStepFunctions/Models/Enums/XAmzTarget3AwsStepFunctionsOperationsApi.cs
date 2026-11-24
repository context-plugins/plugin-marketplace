using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AwsStepFunctionsOperationsApi>))]
public sealed record XAmzTarget3AwsStepFunctionsOperationsApi : OpenStringEnum<XAmzTarget3AwsStepFunctionsOperationsApi>
{
    private XAmzTarget3AwsStepFunctionsOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AwsStepFunctionsOperationsApi AwsStepFunctionsValidateStateMachineDefinition = new(
        "AWSStepFunctions.ValidateStateMachineDefinition");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsValidateStateMachineDefinition,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                AwsStepFunctionsValidateStateMachineDefinition => onAwsStepFunctionsValidateStateMachineDefinition(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsValidateStateMachineDefinition, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsValidateStateMachineDefinition) onAwsStepFunctionsValidateStateMachineDefinition();
        else otherwise(Value);
    }
}
