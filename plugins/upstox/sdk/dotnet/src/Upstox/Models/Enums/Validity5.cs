using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

/// <summary>
/// Order validity (DAY- Day and IOC- Immediate or Cancel (IOC) order)
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Validity5>))]
public sealed record Validity5 : OpenStringEnum<Validity5>
{
    private Validity5(string value) : base(value)
    {
    }

    public static readonly Validity5 Day = new("DAY");

    public static readonly Validity5 Ioc = new("IOC");

    public TResult Match<TResult>(Func<TResult> onDay, Func<TResult> onIoc, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Day => onDay(),
            _ when this == Ioc => onIoc(),
            _ => otherwise(Value)
        };

    public void Match(Action onDay, Action onIoc, Action<string> otherwise)
    {
        if (this == Day) onDay();
        else if (this == Ioc) onIoc();
        else otherwise(Value);
    }
}
