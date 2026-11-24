using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget>))]
public sealed record XAmzTarget : OpenStringEnum<XAmzTarget>
{
    private XAmzTarget(string value) : base(value)
    {
    }

    public static readonly XAmzTarget AwsStepFunctionsCreateActivity = new("AWSStepFunctions.CreateActivity");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsCreateActivity, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsCreateActivity => onAwsStepFunctionsCreateActivity(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsCreateActivity, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsCreateActivity) onAwsStepFunctionsCreateActivity();
        else otherwise(Value);
    }
}
