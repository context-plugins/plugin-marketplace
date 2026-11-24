using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget15>))]
public sealed record XAmzTarget15 : OpenStringEnum<XAmzTarget15>
{
    private XAmzTarget15(string value) : base(value)
    {
    }

    public static readonly XAmzTarget15 AwsStepFunctionsListMapRuns = new("AWSStepFunctions.ListMapRuns");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsListMapRuns, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsListMapRuns => onAwsStepFunctionsListMapRuns(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsListMapRuns, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsListMapRuns) onAwsStepFunctionsListMapRuns();
        else otherwise(Value);
    }
}
