using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Products>))]
public sealed record Products : OpenStringEnum<Products>
{
    private Products(string value) : base(value)
    {
    }

    public static readonly Products Ok = new("ok");

    public static readonly Products Slow = new("slow");

    public static readonly Products Stale = new("stale");

    public TResult Match<TResult>(Func<TResult> onOk,
        Func<TResult> onSlow,
        Func<TResult> onStale,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ok => onOk(),
            _ when this == Slow => onSlow(),
            _ when this == Stale => onStale(),
            _ => otherwise(Value)
        };

    public void Match(Action onOk, Action onSlow, Action onStale, Action<string> otherwise)
    {
        if (this == Ok) onOk();
        else if (this == Slow) onSlow();
        else if (this == Stale) onStale();
        else otherwise(Value);
    }
}
