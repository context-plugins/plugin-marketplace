using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CloseDay>))]
public sealed record CloseDay : OpenStringEnum<CloseDay>
{
    private CloseDay(string value) : base(value)
    {
    }

    public static readonly CloseDay Monday = new("MONDAY");

    public static readonly CloseDay Tuesday = new("TUESDAY");

    public static readonly CloseDay Wednesday = new("WEDNESDAY");

    public static readonly CloseDay Thursday = new("THURSDAY");

    public static readonly CloseDay Friday = new("FRIDAY");

    public static readonly CloseDay Saturday = new("SATURDAY");

    public static readonly CloseDay Sunday = new("SUNDAY");

    public TResult Match<TResult>(Func<TResult> onMonday,
        Func<TResult> onTuesday,
        Func<TResult> onWednesday,
        Func<TResult> onThursday,
        Func<TResult> onFriday,
        Func<TResult> onSaturday,
        Func<TResult> onSunday,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Monday => onMonday(),
            _ when this == Tuesday => onTuesday(),
            _ when this == Wednesday => onWednesday(),
            _ when this == Thursday => onThursday(),
            _ when this == Friday => onFriday(),
            _ when this == Saturday => onSaturday(),
            _ when this == Sunday => onSunday(),
            _ => otherwise(Value)
        };

    public void Match(Action onMonday,
        Action onTuesday,
        Action onWednesday,
        Action onThursday,
        Action onFriday,
        Action onSaturday,
        Action onSunday,
        Action<string> otherwise)
    {
        if (this == Monday) onMonday();
        else if (this == Tuesday) onTuesday();
        else if (this == Wednesday) onWednesday();
        else if (this == Thursday) onThursday();
        else if (this == Friday) onFriday();
        else if (this == Saturday) onSaturday();
        else if (this == Sunday) onSunday();
        else otherwise(Value);
    }
}
