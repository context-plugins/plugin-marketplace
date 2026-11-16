using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of disbursement to perform. Defaults to <c>GENERAL_PAYOUT</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FundsFlowType>))]
public sealed record FundsFlowType : OpenStringEnum<FundsFlowType>
{
    private FundsFlowType(string value) : base(value)
    {
    }

    public static readonly FundsFlowType GeneralPayout = new("GENERAL_PAYOUT");

    public static readonly FundsFlowType MeToMe = new("ME_TO_ME");

    public static readonly FundsFlowType Government = new("GOVERNMENT");

    public TResult Match<TResult>(Func<TResult> onGeneralPayout,
        Func<TResult> onMeToMe,
        Func<TResult> onGovernment,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == GeneralPayout => onGeneralPayout(),
            _ when this == MeToMe => onMeToMe(),
            _ when this == Government => onGovernment(),
            _ => otherwise(Value)
        };

    public void Match(Action onGeneralPayout, Action onMeToMe, Action onGovernment, Action<string> otherwise)
    {
        if (this == GeneralPayout) onGeneralPayout();
        else if (this == MeToMe) onMeToMe();
        else if (this == Government) onGovernment();
        else otherwise(Value);
    }
}
