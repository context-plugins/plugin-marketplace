using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget20>))]
public sealed record XAmzTarget20 : OpenStringEnum<XAmzTarget20>
{
    private XAmzTarget20(string value) : base(value)
    {
    }

    public static readonly XAmzTarget20 AwsStepFunctionsSendTaskFailure = new("AWSStepFunctions.SendTaskFailure");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsSendTaskFailure, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsSendTaskFailure => onAwsStepFunctionsSendTaskFailure(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsSendTaskFailure, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsSendTaskFailure) onAwsStepFunctionsSendTaskFailure();
        else otherwise(Value);
    }
}
