using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

/// <summary>
/// Structured failure reason; null until/unless the run fails. Branch on this instead of parsing error.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ErrorCode>))]
public sealed record ErrorCode : OpenStringEnum<ErrorCode>
{
    private ErrorCode(string value) : base(value)
    {
    }

    public static readonly ErrorCode Blocked = new("blocked");

    public static readonly ErrorCode Timeout = new("timeout");

    public static readonly ErrorCode Selector = new("selector");

    public static readonly ErrorCode HttpError = new("http_error");

    public static readonly ErrorCode Network = new("network");

    public static readonly ErrorCode Storage = new("storage");

    public static readonly ErrorCode Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onBlocked,
        Func<TResult> onTimeout,
        Func<TResult> onSelector,
        Func<TResult> onHttpError,
        Func<TResult> onNetwork,
        Func<TResult> onStorage,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Blocked => onBlocked(),
            _ when this == Timeout => onTimeout(),
            _ when this == Selector => onSelector(),
            _ when this == HttpError => onHttpError(),
            _ when this == Network => onNetwork(),
            _ when this == Storage => onStorage(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onBlocked,
        Action onTimeout,
        Action onSelector,
        Action onHttpError,
        Action onNetwork,
        Action onStorage,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Blocked) onBlocked();
        else if (this == Timeout) onTimeout();
        else if (this == Selector) onSelector();
        else if (this == HttpError) onHttpError();
        else if (this == Network) onNetwork();
        else if (this == Storage) onStorage();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
