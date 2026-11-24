using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Retryability>))]
public sealed record Retryability : OpenStringEnum<Retryability>
{
    private Retryability(string value) : base(value)
    {
    }

    public static readonly Retryability Retryable = new("retryable");

    public static readonly Retryability NonRetryable = new("non_retryable");

    public static readonly Retryability Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onRetryable,
        Func<TResult> onNonRetryable,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Retryable => onRetryable(),
            _ when this == NonRetryable => onNonRetryable(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onRetryable, Action onNonRetryable, Action onUnknown, Action<string> otherwise)
    {
        if (this == Retryable) onRetryable();
        else if (this == NonRetryable) onNonRetryable();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
