using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<HolidayType>))]
public sealed record HolidayType : OpenStringEnum<HolidayType>
{
    private HolidayType(string value) : base(value)
    {
    }

    public static readonly HolidayType All = new("ALL");

    public static readonly HolidayType SettlementHoliday = new("SETTLEMENT_HOLIDAY");

    public static readonly HolidayType TradingHoliday = new("TRADING_HOLIDAY");

    public static readonly HolidayType SpecialTiming = new("SPECIAL_TIMING");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onSettlementHoliday,
        Func<TResult> onTradingHoliday,
        Func<TResult> onSpecialTiming,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == SettlementHoliday => onSettlementHoliday(),
            _ when this == TradingHoliday => onTradingHoliday(),
            _ when this == SpecialTiming => onSpecialTiming(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll,
        Action onSettlementHoliday,
        Action onTradingHoliday,
        Action onSpecialTiming,
        Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == SettlementHoliday) onSettlementHoliday();
        else if (this == TradingHoliday) onTradingHoliday();
        else if (this == SpecialTiming) onSpecialTiming();
        else otherwise(Value);
    }
}
