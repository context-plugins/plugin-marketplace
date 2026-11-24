using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// The type of rate (fixed, variable, etc).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LendingRateType>))]
public sealed record LendingRateType : OpenStringEnum<LendingRateType>
{
    private LendingRateType(string value) : base(value)
    {
    }

    public static readonly LendingRateType BundleDiscountFixed = new("BUNDLE_DISCOUNT_FIXED");

    public static readonly LendingRateType BundleDiscountVariable = new("BUNDLE_DISCOUNT_VARIABLE");

    public static readonly LendingRateType CashAdvance = new("CASH_ADVANCE");

    public static readonly LendingRateType Discount = new("DISCOUNT");

    public static readonly LendingRateType Fixed = new("FIXED");

    public static readonly LendingRateType Floating = new("FLOATING");

    public static readonly LendingRateType Introductory = new("INTRODUCTORY");

    public static readonly LendingRateType MarketLinked = new("MARKET_LINKED");

    public static readonly LendingRateType Penalty = new("PENALTY");

    public static readonly LendingRateType Purchase = new("PURCHASE");

    public static readonly LendingRateType Variable = new("VARIABLE");

    public TResult Match<TResult>(Func<TResult> onBundleDiscountFixed,
        Func<TResult> onBundleDiscountVariable,
        Func<TResult> onCashAdvance,
        Func<TResult> onDiscount,
        Func<TResult> onFixed,
        Func<TResult> onFloating,
        Func<TResult> onIntroductory,
        Func<TResult> onMarketLinked,
        Func<TResult> onPenalty,
        Func<TResult> onPurchase,
        Func<TResult> onVariable,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BundleDiscountFixed => onBundleDiscountFixed(),
            _ when this == BundleDiscountVariable => onBundleDiscountVariable(),
            _ when this == CashAdvance => onCashAdvance(),
            _ when this == Discount => onDiscount(),
            _ when this == Fixed => onFixed(),
            _ when this == Floating => onFloating(),
            _ when this == Introductory => onIntroductory(),
            _ when this == MarketLinked => onMarketLinked(),
            _ when this == Penalty => onPenalty(),
            _ when this == Purchase => onPurchase(),
            _ when this == Variable => onVariable(),
            _ => otherwise(Value)
        };

    public void Match(Action onBundleDiscountFixed,
        Action onBundleDiscountVariable,
        Action onCashAdvance,
        Action onDiscount,
        Action onFixed,
        Action onFloating,
        Action onIntroductory,
        Action onMarketLinked,
        Action onPenalty,
        Action onPurchase,
        Action onVariable,
        Action<string> otherwise)
    {
        if (this == BundleDiscountFixed) onBundleDiscountFixed();
        else if (this == BundleDiscountVariable) onBundleDiscountVariable();
        else if (this == CashAdvance) onCashAdvance();
        else if (this == Discount) onDiscount();
        else if (this == Fixed) onFixed();
        else if (this == Floating) onFloating();
        else if (this == Introductory) onIntroductory();
        else if (this == MarketLinked) onMarketLinked();
        else if (this == Penalty) onPenalty();
        else if (this == Purchase) onPurchase();
        else if (this == Variable) onVariable();
        else otherwise(Value);
    }
}
