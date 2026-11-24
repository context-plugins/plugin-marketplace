using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3>))]
public sealed record XAmzTarget3 : OpenStringEnum<XAmzTarget3>
{
    private XAmzTarget3(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3 AwsStepFunctionsListActivities = new("AWSStepFunctions.ListActivities");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsListActivities, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsListActivities => onAwsStepFunctionsListActivities(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsListActivities, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsListActivities) onAwsStepFunctionsListActivities();
        else otherwise(Value);
    }
}
