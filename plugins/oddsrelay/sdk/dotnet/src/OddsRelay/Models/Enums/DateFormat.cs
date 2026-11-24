using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DateFormat>))]
public sealed record DateFormat : OpenStringEnum<DateFormat>
{
    private DateFormat(string value) : base(value)
    {
    }

    public static readonly DateFormat Iso = new("iso");

    public static readonly DateFormat Unix = new("unix");

    public TResult Match<TResult>(Func<TResult> onIso, Func<TResult> onUnix, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Iso => onIso(),
            _ when this == Unix => onUnix(),
            _ => otherwise(Value)
        };

    public void Match(Action onIso, Action onUnix, Action<string> otherwise)
    {
        if (this == Iso) onIso();
        else if (this == Unix) onUnix();
        else otherwise(Value);
    }
}
