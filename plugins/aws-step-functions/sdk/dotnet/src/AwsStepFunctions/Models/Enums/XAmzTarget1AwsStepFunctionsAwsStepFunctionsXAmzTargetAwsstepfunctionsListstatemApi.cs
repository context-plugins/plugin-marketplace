using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi>))]
public sealed record XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi : OpenStringEnum<XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi>
{
    private XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi AwsStepFunctionsListStateMachineAliases = new(
        "AWSStepFunctions.ListStateMachineAliases");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsListStateMachineAliases,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsListStateMachineAliases => onAwsStepFunctionsListStateMachineAliases(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsListStateMachineAliases, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsListStateMachineAliases) onAwsStepFunctionsListStateMachineAliases();
        else otherwise(Value);
    }
}
