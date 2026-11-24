using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget24>))]
public sealed record XAmzTarget24 : OpenStringEnum<XAmzTarget24>
{
    private XAmzTarget24(string value) : base(value)
    {
    }

    public static readonly XAmzTarget24 AwsStepFunctionsTagResource = new("AWSStepFunctions.TagResource");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsTagResource, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsTagResource => onAwsStepFunctionsTagResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsTagResource, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsTagResource) onAwsStepFunctionsTagResource();
        else otherwise(Value);
    }
}
