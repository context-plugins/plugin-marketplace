using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DateRange>))]
public sealed record DateRange : OpenStringEnum<DateRange>
{
    private DateRange(string value) : base(value)
    {
    }

    public static readonly DateRange _1Day = new("1DAY");

    public static readonly DateRange _7Day = new("7DAY");

    public static readonly DateRange _30Day = new("30DAY");

    public TResult Match<TResult>(Func<TResult> on_1Day,
        Func<TResult> on_7Day,
        Func<TResult> on_30Day,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _1Day => on_1Day(),
            _ when this == _7Day => on_7Day(),
            _ when this == _30Day => on_30Day(),
            _ => otherwise(Value)
        };

    public void Match(Action on_1Day, Action on_7Day, Action on_30Day, Action<string> otherwise)
    {
        if (this == _1Day) on_1Day();
        else if (this == _7Day) on_7Day();
        else if (this == _30Day) on_30Day();
        else otherwise(Value);
    }
}
