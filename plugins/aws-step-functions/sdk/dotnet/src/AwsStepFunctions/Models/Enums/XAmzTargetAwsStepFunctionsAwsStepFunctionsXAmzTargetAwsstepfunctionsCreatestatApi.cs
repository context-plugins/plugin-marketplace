using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApi>))]
public sealed record XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApi : OpenStringEnum<XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApi>
{
    private XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApi AwsStepFunctionsCreateStateMachineAlias = new(
        "AWSStepFunctions.CreateStateMachineAlias");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsCreateStateMachineAlias,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsCreateStateMachineAlias => onAwsStepFunctionsCreateStateMachineAlias(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsCreateStateMachineAlias, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsCreateStateMachineAlias) onAwsStepFunctionsCreateStateMachineAlias();
        else otherwise(Value);
    }
}
