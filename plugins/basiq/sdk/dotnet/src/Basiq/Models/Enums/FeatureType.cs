using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// The type of feature described.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FeatureType>))]
public sealed record FeatureType : OpenStringEnum<FeatureType>
{
    private FeatureType(string value) : base(value)
    {
    }

    public static readonly FeatureType AdditionalCards = new("ADDITIONAL_CARDS");

    public static readonly FeatureType BalanceTransfers = new("BALANCE_TRANSFERS");

    public static readonly FeatureType BillPayment = new("BILL_PAYMENT");

    public static readonly FeatureType BonusRewards = new("BONUS_REWARDS");

    public static readonly FeatureType CardAccess = new("CARD_ACCESS");

    public static readonly FeatureType CashbackOffer = new("CASHBACK_OFFER");

    public static readonly FeatureType ComplementaryProductDiscounts = new("COMPLEMENTARY_PRODUCT_DISCOUNTS");

    public static readonly FeatureType DigitalBanking = new("DIGITAL_BANKING");

    public static readonly FeatureType DigitalWallet = new("DIGITAL_WALLET");

    public static readonly FeatureType DonateInterest = new("DONATE_INTEREST");

    public static readonly FeatureType ExtraRepayments = new("EXTRA_REPAYMENTS");

    public static readonly FeatureType FraudProtection = new("FRAUD_PROTECTION");

    public static readonly FeatureType FreeTxns = new("FREE_TXNS");

    public static readonly FeatureType FreeTxnsAllowance = new("FREE_TXNS_ALLOWANCE");

    public static readonly FeatureType Guarantor = new("GUARANTOR");

    public static readonly FeatureType Insurance = new("INSURANCE");

    public static readonly FeatureType InstalmentPlan = new("INSTALMENT_PLAN");

    public static readonly FeatureType InterestFree = new("INTEREST_FREE");

    public static readonly FeatureType InterestFreeTransfers = new("INTEREST_FREE_TRANSFERS");

    public static readonly FeatureType LoyaltyProgram = new("LOYALTY_PROGRAM");

    public static readonly FeatureType Notifications = new("NOTIFICATIONS");

    public static readonly FeatureType NppEnabled = new("NPP_ENABLED");

    public static readonly FeatureType NppPayid = new("NPP_PAYID");

    public static readonly FeatureType Offset = new("OFFSET");

    public static readonly FeatureType Other = new("OTHER");

    public static readonly FeatureType Overdraft = new("OVERDRAFT");

    public static readonly FeatureType Redraw = new("REDRAW");

    public static readonly FeatureType RelationshipManagement = new("RELATIONSHIP_MANAGEMENT");

    public static readonly FeatureType UnlimitedTxns = new("UNLIMITED_TXNS");

    public TResult Match<TResult>(Func<TResult> onAdditionalCards,
        Func<TResult> onBalanceTransfers,
        Func<TResult> onBillPayment,
        Func<TResult> onBonusRewards,
        Func<TResult> onCardAccess,
        Func<TResult> onCashbackOffer,
        Func<TResult> onComplementaryProductDiscounts,
        Func<TResult> onDigitalBanking,
        Func<TResult> onDigitalWallet,
        Func<TResult> onDonateInterest,
        Func<TResult> onExtraRepayments,
        Func<TResult> onFraudProtection,
        Func<TResult> onFreeTxns,
        Func<TResult> onFreeTxnsAllowance,
        Func<TResult> onGuarantor,
        Func<TResult> onInsurance,
        Func<TResult> onInstalmentPlan,
        Func<TResult> onInterestFree,
        Func<TResult> onInterestFreeTransfers,
        Func<TResult> onLoyaltyProgram,
        Func<TResult> onNotifications,
        Func<TResult> onNppEnabled,
        Func<TResult> onNppPayid,
        Func<TResult> onOffset,
        Func<TResult> onOther,
        Func<TResult> onOverdraft,
        Func<TResult> onRedraw,
        Func<TResult> onRelationshipManagement,
        Func<TResult> onUnlimitedTxns,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AdditionalCards => onAdditionalCards(),
            _ when this == BalanceTransfers => onBalanceTransfers(),
            _ when this == BillPayment => onBillPayment(),
            _ when this == BonusRewards => onBonusRewards(),
            _ when this == CardAccess => onCardAccess(),
            _ when this == CashbackOffer => onCashbackOffer(),
            _ when this == ComplementaryProductDiscounts => onComplementaryProductDiscounts(),
            _ when this == DigitalBanking => onDigitalBanking(),
            _ when this == DigitalWallet => onDigitalWallet(),
            _ when this == DonateInterest => onDonateInterest(),
            _ when this == ExtraRepayments => onExtraRepayments(),
            _ when this == FraudProtection => onFraudProtection(),
            _ when this == FreeTxns => onFreeTxns(),
            _ when this == FreeTxnsAllowance => onFreeTxnsAllowance(),
            _ when this == Guarantor => onGuarantor(),
            _ when this == Insurance => onInsurance(),
            _ when this == InstalmentPlan => onInstalmentPlan(),
            _ when this == InterestFree => onInterestFree(),
            _ when this == InterestFreeTransfers => onInterestFreeTransfers(),
            _ when this == LoyaltyProgram => onLoyaltyProgram(),
            _ when this == Notifications => onNotifications(),
            _ when this == NppEnabled => onNppEnabled(),
            _ when this == NppPayid => onNppPayid(),
            _ when this == Offset => onOffset(),
            _ when this == Other => onOther(),
            _ when this == Overdraft => onOverdraft(),
            _ when this == Redraw => onRedraw(),
            _ when this == RelationshipManagement => onRelationshipManagement(),
            _ when this == UnlimitedTxns => onUnlimitedTxns(),
            _ => otherwise(Value)
        };

    public void Match(Action onAdditionalCards,
        Action onBalanceTransfers,
        Action onBillPayment,
        Action onBonusRewards,
        Action onCardAccess,
        Action onCashbackOffer,
        Action onComplementaryProductDiscounts,
        Action onDigitalBanking,
        Action onDigitalWallet,
        Action onDonateInterest,
        Action onExtraRepayments,
        Action onFraudProtection,
        Action onFreeTxns,
        Action onFreeTxnsAllowance,
        Action onGuarantor,
        Action onInsurance,
        Action onInstalmentPlan,
        Action onInterestFree,
        Action onInterestFreeTransfers,
        Action onLoyaltyProgram,
        Action onNotifications,
        Action onNppEnabled,
        Action onNppPayid,
        Action onOffset,
        Action onOther,
        Action onOverdraft,
        Action onRedraw,
        Action onRelationshipManagement,
        Action onUnlimitedTxns,
        Action<string> otherwise)
    {
        if (this == AdditionalCards) onAdditionalCards();
        else if (this == BalanceTransfers) onBalanceTransfers();
        else if (this == BillPayment) onBillPayment();
        else if (this == BonusRewards) onBonusRewards();
        else if (this == CardAccess) onCardAccess();
        else if (this == CashbackOffer) onCashbackOffer();
        else if (this == ComplementaryProductDiscounts) onComplementaryProductDiscounts();
        else if (this == DigitalBanking) onDigitalBanking();
        else if (this == DigitalWallet) onDigitalWallet();
        else if (this == DonateInterest) onDonateInterest();
        else if (this == ExtraRepayments) onExtraRepayments();
        else if (this == FraudProtection) onFraudProtection();
        else if (this == FreeTxns) onFreeTxns();
        else if (this == FreeTxnsAllowance) onFreeTxnsAllowance();
        else if (this == Guarantor) onGuarantor();
        else if (this == Insurance) onInsurance();
        else if (this == InstalmentPlan) onInstalmentPlan();
        else if (this == InterestFree) onInterestFree();
        else if (this == InterestFreeTransfers) onInterestFreeTransfers();
        else if (this == LoyaltyProgram) onLoyaltyProgram();
        else if (this == Notifications) onNotifications();
        else if (this == NppEnabled) onNppEnabled();
        else if (this == NppPayid) onNppPayid();
        else if (this == Offset) onOffset();
        else if (this == Other) onOther();
        else if (this == Overdraft) onOverdraft();
        else if (this == Redraw) onRedraw();
        else if (this == RelationshipManagement) onRelationshipManagement();
        else if (this == UnlimitedTxns) onUnlimitedTxns();
        else otherwise(Value);
    }
}
