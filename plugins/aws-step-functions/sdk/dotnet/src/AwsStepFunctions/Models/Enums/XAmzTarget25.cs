using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget25>))]
public sealed record XAmzTarget25 : OpenStringEnum<XAmzTarget25>
{
    private XAmzTarget25(string value) : base(value)
    {
    }

    public static readonly XAmzTarget25 AwsStepFunctionsUntagResource = new("AWSStepFunctions.UntagResource");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsUntagResource, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsUntagResource => onAwsStepFunctionsUntagResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsUntagResource, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsUntagResource) onAwsStepFunctionsUntagResource();
        else otherwise(Value);
    }
}
