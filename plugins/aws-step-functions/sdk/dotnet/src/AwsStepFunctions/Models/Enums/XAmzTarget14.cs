using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget14>))]
public sealed record XAmzTarget14 : OpenStringEnum<XAmzTarget14>
{
    private XAmzTarget14(string value) : base(value)
    {
    }

    public static readonly XAmzTarget14 AwsStepFunctionsDescribeMapRun = new("AWSStepFunctions.DescribeMapRun");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsDescribeMapRun, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsDescribeMapRun => onAwsStepFunctionsDescribeMapRun(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsDescribeMapRun, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsDescribeMapRun) onAwsStepFunctionsDescribeMapRun();
        else otherwise(Value);
    }
}
