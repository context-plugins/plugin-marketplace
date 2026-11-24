using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget16>))]
public sealed record XAmzTarget16 : OpenStringEnum<XAmzTarget16>
{
    private XAmzTarget16(string value) : base(value)
    {
    }

    public static readonly XAmzTarget16 AwsStepFunctionsUpdateMapRun = new("AWSStepFunctions.UpdateMapRun");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsUpdateMapRun, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsUpdateMapRun => onAwsStepFunctionsUpdateMapRun(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsUpdateMapRun, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsUpdateMapRun) onAwsStepFunctionsUpdateMapRun();
        else otherwise(Value);
    }
}
