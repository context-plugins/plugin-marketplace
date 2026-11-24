using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Expense-to-income ratio range. Calculated as: expense / ME040 (Average Monthly Credit). 'Income Exceeded' indicates ratio greater than 100%.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RangeEnum>))]
public sealed record RangeEnum : OpenStringEnum<RangeEnum>
{
    private RangeEnum(string value) : base(value)
    {
    }

    public static readonly RangeEnum _0To10 = new("0% to 10%");

    public static readonly RangeEnum _10To20 = new("10% to 20%");

    public static readonly RangeEnum _20To30 = new("20% to 30%");

    public static readonly RangeEnum _30To40 = new("30% to 40%");

    public static readonly RangeEnum _40To50 = new("40% to 50%");

    public static readonly RangeEnum _50To60 = new("50% to 60%");

    public static readonly RangeEnum _60To70 = new("60% to 70%");

    public static readonly RangeEnum _70To80 = new("70% to 80%");

    public static readonly RangeEnum _80To90 = new("80% to 90%");

    public static readonly RangeEnum _90To100 = new("90% to 100%");

    public static readonly RangeEnum IncomeExceeded = new("Income Exceeded");

    public TResult Match<TResult>(Func<TResult> on_0To10,
        Func<TResult> on_10To20,
        Func<TResult> on_20To30,
        Func<TResult> on_30To40,
        Func<TResult> on_40To50,
        Func<TResult> on_50To60,
        Func<TResult> on_60To70,
        Func<TResult> on_70To80,
        Func<TResult> on_80To90,
        Func<TResult> on_90To100,
        Func<TResult> onIncomeExceeded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _0To10 => on_0To10(),
            _ when this == _10To20 => on_10To20(),
            _ when this == _20To30 => on_20To30(),
            _ when this == _30To40 => on_30To40(),
            _ when this == _40To50 => on_40To50(),
            _ when this == _50To60 => on_50To60(),
            _ when this == _60To70 => on_60To70(),
            _ when this == _70To80 => on_70To80(),
            _ when this == _80To90 => on_80To90(),
            _ when this == _90To100 => on_90To100(),
            _ when this == IncomeExceeded => onIncomeExceeded(),
            _ => otherwise(Value)
        };

    public void Match(Action on_0To10,
        Action on_10To20,
        Action on_20To30,
        Action on_30To40,
        Action on_40To50,
        Action on_50To60,
        Action on_60To70,
        Action on_70To80,
        Action on_80To90,
        Action on_90To100,
        Action onIncomeExceeded,
        Action<string> otherwise)
    {
        if (this == _0To10) on_0To10();
        else if (this == _10To20) on_10To20();
        else if (this == _20To30) on_20To30();
        else if (this == _30To40) on_30To40();
        else if (this == _40To50) on_40To50();
        else if (this == _50To60) on_50To60();
        else if (this == _60To70) on_60To70();
        else if (this == _70To80) on_70To80();
        else if (this == _80To90) on_80To90();
        else if (this == _90To100) on_90To100();
        else if (this == IncomeExceeded) onIncomeExceeded();
        else otherwise(Value);
    }
}
