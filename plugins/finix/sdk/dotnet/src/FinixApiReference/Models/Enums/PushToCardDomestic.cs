using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Indicates whether the <c>Payment Instrument</c> supports push-to-card, domestically. For more details, see <see href="/guides/payouts/card-payouts">Push to Card</see>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PushToCardDomestic>))]
public sealed record PushToCardDomestic : OpenStringEnum<PushToCardDomestic>
{
    private PushToCardDomestic(string value) : base(value)
    {
    }

    public static readonly PushToCardDomestic FastFunds = new("FAST_FUNDS");

    public static readonly PushToCardDomestic NonFastFunds = new("NON_FAST_FUNDS");

    public static readonly PushToCardDomestic NotSupported = new("NOT_SUPPORTED");

    public static readonly PushToCardDomestic Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onFastFunds,
        Func<TResult> onNonFastFunds,
        Func<TResult> onNotSupported,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FastFunds => onFastFunds(),
            _ when this == NonFastFunds => onNonFastFunds(),
            _ when this == NotSupported => onNotSupported(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onFastFunds,
        Action onNonFastFunds,
        Action onNotSupported,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == FastFunds) onFastFunds();
        else if (this == NonFastFunds) onNonFastFunds();
        else if (this == NotSupported) onNotSupported();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
