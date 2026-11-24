using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi>))]
public sealed record XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi : OpenStringEnum<XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi>
{
    private XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi AwsStepFunctionsDeleteStateMachineAlias = new(
        "AWSStepFunctions.DeleteStateMachineAlias");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsDeleteStateMachineAlias,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsDeleteStateMachineAlias => onAwsStepFunctionsDeleteStateMachineAlias(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsDeleteStateMachineAlias, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsDeleteStateMachineAlias) onAwsStepFunctionsDeleteStateMachineAlias();
        else otherwise(Value);
    }
}
