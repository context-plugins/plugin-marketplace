using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Enum for PayByType.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PayByType>))]
public sealed record PayByType : OpenStringEnum<PayByType>
{
    private PayByType(string value) : base(value)
    {
    }

    public static readonly PayByType Check = new("CHECK");

    public static readonly PayByType Ach = new("ACH");

    public static readonly PayByType Rpps = new("RPPS");

    public static readonly PayByType Offline = new("OFFLINE");

    public static readonly PayByType InternationalEPayment = new("INTERNATIONAL_E_PAYMENT");

    public static readonly PayByType VirtualCard = new("VIRTUAL_CARD");

    public static readonly PayByType Wallet = new("WALLET");

    public static readonly PayByType Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onCheck,
        Func<TResult> onAch,
        Func<TResult> onRpps,
        Func<TResult> onOffline,
        Func<TResult> onInternationalEPayment,
        Func<TResult> onVirtualCard,
        Func<TResult> onWallet,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Check => onCheck(),
            _ when this == Ach => onAch(),
            _ when this == Rpps => onRpps(),
            _ when this == Offline => onOffline(),
            _ when this == InternationalEPayment => onInternationalEPayment(),
            _ when this == VirtualCard => onVirtualCard(),
            _ when this == Wallet => onWallet(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onCheck,
        Action onAch,
        Action onRpps,
        Action onOffline,
        Action onInternationalEPayment,
        Action onVirtualCard,
        Action onWallet,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Check) onCheck();
        else if (this == Ach) onAch();
        else if (this == Rpps) onRpps();
        else if (this == Offline) onOffline();
        else if (this == InternationalEPayment) onInternationalEPayment();
        else if (this == VirtualCard) onVirtualCard();
        else if (this == Wallet) onWallet();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
