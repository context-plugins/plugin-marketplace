using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// The type of rate (base, bonus, etc).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DepositRateType>))]
public sealed record DepositRateType : OpenStringEnum<DepositRateType>
{
    private DepositRateType(string value) : base(value)
    {
    }

    public static readonly DepositRateType Bonus = new("BONUS");

    public static readonly DepositRateType BundleBonus = new("BUNDLE_BONUS");

    public static readonly DepositRateType Fixed = new("FIXED");

    public static readonly DepositRateType Floating = new("FLOATING");

    public static readonly DepositRateType Introductory = new("INTRODUCTORY");

    public static readonly DepositRateType MarketLinked = new("MARKET_LINKED");

    public static readonly DepositRateType Variable = new("VARIABLE");

    public TResult Match<TResult>(Func<TResult> onBonus,
        Func<TResult> onBundleBonus,
        Func<TResult> onFixed,
        Func<TResult> onFloating,
        Func<TResult> onIntroductory,
        Func<TResult> onMarketLinked,
        Func<TResult> onVariable,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Bonus => onBonus(),
            _ when this == BundleBonus => onBundleBonus(),
            _ when this == Fixed => onFixed(),
            _ when this == Floating => onFloating(),
            _ when this == Introductory => onIntroductory(),
            _ when this == MarketLinked => onMarketLinked(),
            _ when this == Variable => onVariable(),
            _ => otherwise(Value)
        };

    public void Match(Action onBonus,
        Action onBundleBonus,
        Action onFixed,
        Action onFloating,
        Action onIntroductory,
        Action onMarketLinked,
        Action onVariable,
        Action<string> otherwise)
    {
        if (this == Bonus) onBonus();
        else if (this == BundleBonus) onBundleBonus();
        else if (this == Fixed) onFixed();
        else if (this == Floating) onFloating();
        else if (this == Introductory) onIntroductory();
        else if (this == MarketLinked) onMarketLinked();
        else if (this == Variable) onVariable();
        else otherwise(Value);
    }
}
