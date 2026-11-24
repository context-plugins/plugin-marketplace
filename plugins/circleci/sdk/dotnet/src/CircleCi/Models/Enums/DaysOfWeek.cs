using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Enum;

namespace CircleCi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DaysOfWeek>))]
public sealed record DaysOfWeek : OpenStringEnum<DaysOfWeek>
{
    private DaysOfWeek(string value) : base(value)
    {
    }

    public static readonly DaysOfWeek Mon = new("MON");

    public static readonly DaysOfWeek Tue = new("TUE");

    public static readonly DaysOfWeek Wed = new("WED");

    public static readonly DaysOfWeek Thu = new("THU");

    public static readonly DaysOfWeek Fri = new("FRI");

    public static readonly DaysOfWeek Sat = new("SAT");

    public static readonly DaysOfWeek Sun = new("SUN");

    public TResult Match<TResult>(Func<TResult> onMon,
        Func<TResult> onTue,
        Func<TResult> onWed,
        Func<TResult> onThu,
        Func<TResult> onFri,
        Func<TResult> onSat,
        Func<TResult> onSun,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Mon => onMon(),
            _ when this == Tue => onTue(),
            _ when this == Wed => onWed(),
            _ when this == Thu => onThu(),
            _ when this == Fri => onFri(),
            _ when this == Sat => onSat(),
            _ when this == Sun => onSun(),
            _ => otherwise(Value)
        };

    public void Match(Action onMon,
        Action onTue,
        Action onWed,
        Action onThu,
        Action onFri,
        Action onSat,
        Action onSun,
        Action<string> otherwise)
    {
        if (this == Mon) onMon();
        else if (this == Tue) onTue();
        else if (this == Wed) onWed();
        else if (this == Thu) onThu();
        else if (this == Fri) onFri();
        else if (this == Sat) onSat();
        else if (this == Sun) onSun();
        else otherwise(Value);
    }
}
