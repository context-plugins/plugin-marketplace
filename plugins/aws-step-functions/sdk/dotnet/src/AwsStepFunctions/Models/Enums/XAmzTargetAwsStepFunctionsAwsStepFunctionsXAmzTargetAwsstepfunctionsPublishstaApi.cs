using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi>))]
public sealed record XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi : OpenStringEnum<XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi>
{
    private XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi AwsStepFunctionsPublishStateMachineVersion = new(
        "AWSStepFunctions.PublishStateMachineVersion");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsPublishStateMachineVersion,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsPublishStateMachineVersion => onAwsStepFunctionsPublishStateMachineVersion(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsPublishStateMachineVersion, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsPublishStateMachineVersion) onAwsStepFunctionsPublishStateMachineVersion();
        else otherwise(Value);
    }
}
