using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

/// <summary>
/// The result value will be OK when no syntax errors are found, or FAIL if the workflow definition does not pass verification.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Result>))]
public sealed record Result : OpenStringEnum<Result>
{
    private Result(string value) : base(value)
    {
    }

    public static readonly Result Ok = new("OK");

    public static readonly Result Fail = new("FAIL");

    public TResult Match<TResult>(Func<TResult> onOk, Func<TResult> onFail, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ok => onOk(),
            _ when this == Fail => onFail(),
            _ => otherwise(Value)
        };

    public void Match(Action onOk, Action onFail, Action<string> otherwise)
    {
        if (this == Ok) onOk();
        else if (this == Fail) onFail();
        else otherwise(Value);
    }
}
