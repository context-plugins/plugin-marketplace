using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The result of the last execution of the plugin instance.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Result>))]
public sealed record Result : OpenStringEnum<Result>
{
    private Result(string value) : base(value)
    {
    }

    public static readonly Result ResultUnspecified = new("RESULT_UNSPECIFIED");

    public static readonly Result Succeeded = new("SUCCEEDED");

    public static readonly Result Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onResultUnspecified,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ResultUnspecified => onResultUnspecified(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onResultUnspecified, Action onSucceeded, Action onFailed, Action<string> otherwise)
    {
        if (this == ResultUnspecified) onResultUnspecified();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
