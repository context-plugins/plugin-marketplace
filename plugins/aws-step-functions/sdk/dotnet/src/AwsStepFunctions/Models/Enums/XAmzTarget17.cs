using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget17>))]
public sealed record XAmzTarget17 : OpenStringEnum<XAmzTarget17>
{
    private XAmzTarget17(string value) : base(value)
    {
    }

    public static readonly XAmzTarget17 AwsStepFunctionsGetActivityTask = new("AWSStepFunctions.GetActivityTask");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsGetActivityTask, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsGetActivityTask => onAwsStepFunctionsGetActivityTask(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsGetActivityTask, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsGetActivityTask) onAwsStepFunctionsGetActivityTask();
        else otherwise(Value);
    }
}
