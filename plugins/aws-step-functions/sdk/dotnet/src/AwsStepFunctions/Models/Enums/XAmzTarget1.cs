using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1>))]
public sealed record XAmzTarget1 : OpenStringEnum<XAmzTarget1>
{
    private XAmzTarget1(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1 AwsStepFunctionsDeleteActivity = new("AWSStepFunctions.DeleteActivity");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsDeleteActivity, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsDeleteActivity => onAwsStepFunctionsDeleteActivity(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsDeleteActivity, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsDeleteActivity) onAwsStepFunctionsDeleteActivity();
        else otherwise(Value);
    }
}
