using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget22>))]
public sealed record XAmzTarget22 : OpenStringEnum<XAmzTarget22>
{
    private XAmzTarget22(string value) : base(value)
    {
    }

    public static readonly XAmzTarget22 AwsStepFunctionsSendTaskSuccess = new("AWSStepFunctions.SendTaskSuccess");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsSendTaskSuccess, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsSendTaskSuccess => onAwsStepFunctionsSendTaskSuccess(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsSendTaskSuccess, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsSendTaskSuccess) onAwsStepFunctionsSendTaskSuccess();
        else otherwise(Value);
    }
}
