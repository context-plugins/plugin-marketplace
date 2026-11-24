using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi>))]
public sealed record XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi : OpenStringEnum<XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi>
{
    private XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi AwsStepFunctionsDescribeStateMachineAlias = new(
        "AWSStepFunctions.DescribeStateMachineAlias");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsDescribeStateMachineAlias,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsDescribeStateMachineAlias => onAwsStepFunctionsDescribeStateMachineAlias(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsDescribeStateMachineAlias, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsDescribeStateMachineAlias) onAwsStepFunctionsDescribeStateMachineAlias();
        else otherwise(Value);
    }
}
