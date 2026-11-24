using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi>))]
public sealed record XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi : OpenStringEnum<XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi>
{
    private XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi AwsStepFunctionsListStateMachineVersions = new(
        "AWSStepFunctions.ListStateMachineVersions");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsListStateMachineVersions,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsListStateMachineVersions => onAwsStepFunctionsListStateMachineVersions(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsListStateMachineVersions, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsListStateMachineVersions) onAwsStepFunctionsListStateMachineVersions();
        else otherwise(Value);
    }
}
