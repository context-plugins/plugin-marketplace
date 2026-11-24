using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

/// <summary>
/// Compensation type. Default is CompensationType.COMPENSATION_TYPE_UNSPECIFIED.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum CompensationTypeUnspecified = new("COMPENSATION_TYPE_UNSPECIFIED");

    public static readonly TypeEnum Base = new("BASE");

    public static readonly TypeEnum Bonus = new("BONUS");

    public static readonly TypeEnum SigningBonus = new("SIGNING_BONUS");

    public static readonly TypeEnum Equity = new("EQUITY");

    public static readonly TypeEnum ProfitSharing = new("PROFIT_SHARING");

    public static readonly TypeEnum Commissions = new("COMMISSIONS");

    public static readonly TypeEnum Tips = new("TIPS");

    public static readonly TypeEnum OtherCompensationType = new("OTHER_COMPENSATION_TYPE");

    public TResult Match<TResult>(Func<TResult> onCompensationTypeUnspecified,
        Func<TResult> onBase,
        Func<TResult> onBonus,
        Func<TResult> onSigningBonus,
        Func<TResult> onEquity,
        Func<TResult> onProfitSharing,
        Func<TResult> onCommissions,
        Func<TResult> onTips,
        Func<TResult> onOtherCompensationType,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CompensationTypeUnspecified => onCompensationTypeUnspecified(),
            _ when this == Base => onBase(),
            _ when this == Bonus => onBonus(),
            _ when this == SigningBonus => onSigningBonus(),
            _ when this == Equity => onEquity(),
            _ when this == ProfitSharing => onProfitSharing(),
            _ when this == Commissions => onCommissions(),
            _ when this == Tips => onTips(),
            _ when this == OtherCompensationType => onOtherCompensationType(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompensationTypeUnspecified,
        Action onBase,
        Action onBonus,
        Action onSigningBonus,
        Action onEquity,
        Action onProfitSharing,
        Action onCommissions,
        Action onTips,
        Action onOtherCompensationType,
        Action<string> otherwise)
    {
        if (this == CompensationTypeUnspecified) onCompensationTypeUnspecified();
        else if (this == Base) onBase();
        else if (this == Bonus) onBonus();
        else if (this == SigningBonus) onSigningBonus();
        else if (this == Equity) onEquity();
        else if (this == ProfitSharing) onProfitSharing();
        else if (this == Commissions) onCommissions();
        else if (this == Tips) onTips();
        else if (this == OtherCompensationType) onOtherCompensationType();
        else otherwise(Value);
    }
}
