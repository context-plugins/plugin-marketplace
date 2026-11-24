using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

/// <summary>
/// <c>degraded</c> when a board is past the age bound (<c>stale_boards</c>) or cannot be served (<c>missing_boards</c>). Still HTTP 200.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status3>))]
public sealed record Status3 : OpenStringEnum<Status3>
{
    private Status3(string value) : base(value)
    {
    }

    public static readonly Status3 Ok = new("ok");

    public static readonly Status3 Degraded = new("degraded");

    public TResult Match<TResult>(Func<TResult> onOk, Func<TResult> onDegraded, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ok => onOk(),
            _ when this == Degraded => onDegraded(),
            _ => otherwise(Value)
        };

    public void Match(Action onOk, Action onDegraded, Action<string> otherwise)
    {
        if (this == Ok) onOk();
        else if (this == Degraded) onDegraded();
        else otherwise(Value);
    }
}
