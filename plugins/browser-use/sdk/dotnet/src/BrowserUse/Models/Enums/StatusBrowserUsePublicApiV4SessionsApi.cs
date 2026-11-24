using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Enum;

namespace BrowserUse.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusBrowserUsePublicApiV4SessionsApi>))]
public sealed record StatusBrowserUsePublicApiV4SessionsApi : OpenStringEnum<StatusBrowserUsePublicApiV4SessionsApi>
{
    private StatusBrowserUsePublicApiV4SessionsApi(string value) : base(value)
    {
    }

    public static readonly StatusBrowserUsePublicApiV4SessionsApi Pending = new("pending");

    public static readonly StatusBrowserUsePublicApiV4SessionsApi Dispatching = new("dispatching");

    public static readonly StatusBrowserUsePublicApiV4SessionsApi Consumed = new("consumed");

    public static readonly StatusBrowserUsePublicApiV4SessionsApi Cancelled = new("cancelled");

    public static readonly StatusBrowserUsePublicApiV4SessionsApi Superseded = new("superseded");

    public static readonly StatusBrowserUsePublicApiV4SessionsApi Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onDispatching,
        Func<TResult> onConsumed,
        Func<TResult> onCancelled,
        Func<TResult> onSuperseded,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Dispatching => onDispatching(),
            _ when this == Consumed => onConsumed(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Superseded => onSuperseded(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onDispatching,
        Action onConsumed,
        Action onCancelled,
        Action onSuperseded,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Dispatching) onDispatching();
        else if (this == Consumed) onConsumed();
        else if (this == Cancelled) onCancelled();
        else if (this == Superseded) onSuperseded();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
