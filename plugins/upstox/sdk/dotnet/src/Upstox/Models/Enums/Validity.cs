using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

/// <summary>
/// It can be one of the following - DAY(default), IOC
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Validity>))]
public sealed record Validity : OpenStringEnum<Validity>
{
    private Validity(string value) : base(value)
    {
    }

    public static readonly Validity Day = new("DAY");

    public static readonly Validity Ioc = new("IOC");

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
