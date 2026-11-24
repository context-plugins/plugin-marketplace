using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Enum;

namespace CircleCi.Models.Enums;

/// <summary>
/// The test result
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Result>))]
public sealed record Result : OpenStringEnum<Result>
{
    private Result(string value) : base(value)
    {
    }

    public static readonly Result Success = new("success");

    public static readonly Result Failure = new("failure");

    public static readonly Result Skipped = new("skipped");

    public TResult Match<TResult>(Func<TResult> onSuccess,
        Func<TResult> onFailure,
        Func<TResult> onSkipped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Success => onSuccess(),
            _ when this == Failure => onFailure(),
            _ when this == Skipped => onSkipped(),
            _ => otherwise(Value)
        };

    public void Match(Action onSuccess, Action onFailure, Action onSkipped, Action<string> otherwise)
    {
        if (this == Success) onSuccess();
        else if (this == Failure) onFailure();
        else if (this == Skipped) onSkipped();
        else otherwise(Value);
    }
}
