using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget23>))]
public sealed record XAmzTarget23 : OpenStringEnum<XAmzTarget23>
{
    private XAmzTarget23(string value) : base(value)
    {
    }

    public static readonly XAmzTarget23 AwsStepFunctionsStartSyncExecution = new("AWSStepFunctions.StartSyncExecution");

    public TResult Match<TResult>(Func<TResult> onAwsStepFunctionsStartSyncExecution,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsStepFunctionsStartSyncExecution => onAwsStepFunctionsStartSyncExecution(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsStepFunctionsStartSyncExecution, Action<string> otherwise)
    {
        if (this == AwsStepFunctionsStartSyncExecution) onAwsStepFunctionsStartSyncExecution();
        else otherwise(Value);
    }
}
