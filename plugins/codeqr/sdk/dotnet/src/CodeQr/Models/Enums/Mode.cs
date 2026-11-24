using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// The mode to use for tracking the lead event. <c>async</c> will not block the request; <c>wait</c> will block the request until the lead event is fully recorded in CodeQR; <c>deferred</c> will defer the lead event creation to a subsequent request.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Mode>))]
public sealed record Mode : OpenStringEnum<Mode>
{
    private Mode(string value) : base(value)
    {
    }

    public static readonly Mode Async = new("async");

    public static readonly Mode Wait = new("wait");

    public static readonly Mode Deferred = new("deferred");

    public TResult Match<TResult>(Func<TResult> onAsync,
        Func<TResult> onWait,
        Func<TResult> onDeferred,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Async => onAsync(),
            _ when this == Wait => onWait(),
            _ when this == Deferred => onDeferred(),
            _ => otherwise(Value)
        };

    public void Match(Action onAsync, Action onWait, Action onDeferred, Action<string> otherwise)
    {
        if (this == Async) onAsync();
        else if (this == Wait) onWait();
        else if (this == Deferred) onDeferred();
        else otherwise(Value);
    }
}
