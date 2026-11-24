using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2>))]
public sealed record XAmzTarget2 : OpenStringEnum<XAmzTarget2>
{
    private XAmzTarget2(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2 AwsStepFunctionsDescribeActivity = new("AWSStepFunctions.DescribeActivity");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsDescribeActivity, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsDescribeActivity => onAwsStepFunctionsDescribeActivity(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsDescribeActivity, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsDescribeActivity) onAwsStepFunctionsDescribeActivity();
        else otherwise(Value);
    }
}
