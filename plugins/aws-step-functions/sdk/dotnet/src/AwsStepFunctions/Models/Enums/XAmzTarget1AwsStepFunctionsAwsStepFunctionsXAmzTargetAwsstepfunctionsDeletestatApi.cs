using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi>))]
public sealed record XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi : OpenStringEnum<XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi>
{
    private XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi AwsStepFunctionsDeleteStateMachineVersion = new(
        "AWSStepFunctions.DeleteStateMachineVersion");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsDeleteStateMachineVersion,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsDeleteStateMachineVersion => onAwsStepFunctionsDeleteStateMachineVersion(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsDeleteStateMachineVersion, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsDeleteStateMachineVersion) onAwsStepFunctionsDeleteStateMachineVersion();
        else otherwise(Value);
    }
}
