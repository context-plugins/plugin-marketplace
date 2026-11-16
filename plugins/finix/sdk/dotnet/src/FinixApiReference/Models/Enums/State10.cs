using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Whether the delivery attempt succeeded or failed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State10>))]
public sealed record State10 : OpenStringEnum<State10>
{
    private State10(string value) : base(value)
    {
    }

    public static readonly State10 Succeeded = new("SUCCEEDED");

    public static readonly State10 Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onSucceeded, Func<TResult> onFailed, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onSucceeded, Action onFailed, Action<string> otherwise)
    {
        if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
