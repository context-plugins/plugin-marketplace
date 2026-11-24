using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Pending = new("pending");

    public static readonly Status Indexing = new("indexing");

    public static readonly Status Ready = new("ready");

    public static readonly Status Failed = new("failed");

    public static readonly Status Unavailable = new("unavailable");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onIndexing,
        Func<TResult> onReady,
        Func<TResult> onFailed,
        Func<TResult> onUnavailable,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Indexing => onIndexing(),
            _ when this == Ready => onReady(),
            _ when this == Failed => onFailed(),
            _ when this == Unavailable => onUnavailable(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onIndexing,
        Action onReady,
        Action onFailed,
        Action onUnavailable,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Indexing) onIndexing();
        else if (this == Ready) onReady();
        else if (this == Failed) onFailed();
        else if (this == Unavailable) onUnavailable();
        else otherwise(Value);
    }
}
