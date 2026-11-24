using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget21>))]
public sealed record XAmzTarget21 : OpenStringEnum<XAmzTarget21>
{
    private XAmzTarget21(string value) : base(value)
    {
    }

    public static readonly XAmzTarget21 AwsStepFunctionsSendTaskHeartbeat = new("AWSStepFunctions.SendTaskHeartbeat");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsSendTaskHeartbeat, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsSendTaskHeartbeat => onAwsStepFunctionsSendTaskHeartbeat(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsSendTaskHeartbeat, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsSendTaskHeartbeat) onAwsStepFunctionsSendTaskHeartbeat();
        else otherwise(Value);
    }
}
