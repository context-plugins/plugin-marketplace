using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Unit1>))]
public sealed record Unit1 : OpenStringEnum<Unit1>
{
    private Unit1(string value) : base(value)
    {
    }

    public static readonly Unit1 CompensationUnitUnspecified = new("COMPENSATION_UNIT_UNSPECIFIED");

    public static readonly Unit1 Hourly = new("HOURLY");

    public static readonly Unit1 Daily = new("DAILY");

    public static readonly Unit1 Weekly = new("WEEKLY");

    public static readonly Unit1 Monthly = new("MONTHLY");

    public static readonly Unit1 Yearly = new("YEARLY");

    public static readonly Unit1 OneTime = new("ONE_TIME");

    public static readonly Unit1 OtherCompensationUnit = new("OTHER_COMPENSATION_UNIT");

    public TResult Match<TResult>(Func<TResult> onCompensationUnitUnspecified,
        Func<TResult> onHourly,
        Func<TResult> onDaily,
        Func<TResult> onWeekly,
        Func<TResult> onMonthly,
        Func<TResult> onYearly,
        Func<TResult> onOneTime,
        Func<TResult> onOtherCompensationUnit,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CompensationUnitUnspecified => onCompensationUnitUnspecified(),
            _ when this == Hourly => onHourly(),
            _ when this == Daily => onDaily(),
            _ when this == Weekly => onWeekly(),
            _ when this == Monthly => onMonthly(),
            _ when this == Yearly => onYearly(),
            _ when this == OneTime => onOneTime(),
            _ when this == OtherCompensationUnit => onOtherCompensationUnit(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompensationUnitUnspecified,
        Action onHourly,
        Action onDaily,
        Action onWeekly,
        Action onMonthly,
        Action onYearly,
        Action onOneTime,
        Action onOtherCompensationUnit,
        Action<string> otherwise)
    {
        if (this == CompensationUnitUnspecified) onCompensationUnitUnspecified();
        else if (this == Hourly) onHourly();
        else if (this == Daily) onDaily();
        else if (this == Weekly) onWeekly();
        else if (this == Monthly) onMonthly();
        else if (this == Yearly) onYearly();
        else if (this == OneTime) onOneTime();
        else if (this == OtherCompensationUnit) onOtherCompensationUnit();
        else otherwise(Value);
    }
}
