using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApi>))]
public sealed record XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApi : OpenStringEnum<XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApi>
{
    private XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApi AwsStepFunctionsUpdateStateMachineAlias = new(
        "AWSStepFunctions.UpdateStateMachineAlias");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsUpdateStateMachineAlias,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsUpdateStateMachineAlias => onAwsStepFunctionsUpdateStateMachineAlias(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsUpdateStateMachineAlias, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsUpdateStateMachineAlias) onAwsStepFunctionsUpdateStateMachineAlias();
        else otherwise(Value);
    }
}
