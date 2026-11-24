using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

/// <summary>
/// Order validity (DAY- Day and IOC- Immediate or Cancel (IOC) order)
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Validity1>))]
public sealed record Validity1 : OpenStringEnum<Validity1>
{
    private Validity1(string value) : base(value)
    {
    }

    public static readonly Validity1 Day = new("DAY");

    public static readonly Validity1 Ioc = new("IOC");

    public static readonly Validity1 Eos = new("EOS");

    public TResult Match<TResult>(Func<TResult> onDay,
        Func<TResult> onIoc,
        Func<TResult> onEos,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Day => onDay(),
            _ when this == Ioc => onIoc(),
            _ when this == Eos => onEos(),
            _ => otherwise(Value)
        };

    public void Match(Action onDay, Action onIoc, Action onEos, Action<string> otherwise)
    {
        if (this == Day) onDay();
        else if (this == Ioc) onIoc();
        else if (this == Eos) onEos();
        else otherwise(Value);
    }
}
