using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// A code indicating why the <c>Payment Instrument</c> was disabled. This field is set when:
/// <list type="bullet">
///   <item><description>The system automatically disables the <c>Payment Instrument</c>.</description></item>
///   <item><description>A user manually disables it (returns <c>USER_INITIATED</c>).</description></item>
/// </list>
/// <para>
/// See <c>disabled_message</c> for all possible codes and their descriptions.
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DisabledCode>))]
public sealed record DisabledCode : OpenStringEnum<DisabledCode>
{
    private DisabledCode(string value) : base(value)
    {
    }

    public static readonly DisabledCode CardAccountClosed = new("CARD_ACCOUNT_CLOSED");

    public static readonly DisabledCode InvalidAccountNumber = new("INVALID_ACCOUNT_NUMBER");

    public static readonly DisabledCode LostOrStolenCard = new("LOST_OR_STOLEN_CARD");

    public static readonly DisabledCode NonReloadableInsufficientFunds = new("NON_RELOADABLE_INSUFFICIENT_FUNDS");

    public static readonly DisabledCode PickUpCard = new("PICK_UP_CARD");

    public static readonly DisabledCode RestrictedCard = new("RESTRICTED_CARD");

    public static readonly DisabledCode UserInitiated = new("USER_INITIATED");

    public TResult Match<TResult>(Func<TResult> onCardAccountClosed,
        Func<TResult> onInvalidAccountNumber,
        Func<TResult> onLostOrStolenCard,
        Func<TResult> onNonReloadableInsufficientFunds,
        Func<TResult> onPickUpCard,
        Func<TResult> onRestrictedCard,
        Func<TResult> onUserInitiated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CardAccountClosed => onCardAccountClosed(),
            _ when this == InvalidAccountNumber => onInvalidAccountNumber(),
            _ when this == LostOrStolenCard => onLostOrStolenCard(),
            _ when this == NonReloadableInsufficientFunds => onNonReloadableInsufficientFunds(),
            _ when this == PickUpCard => onPickUpCard(),
            _ when this == RestrictedCard => onRestrictedCard(),
            _ when this == UserInitiated => onUserInitiated(),
            _ => otherwise(Value)
        };

    public void Match(Action onCardAccountClosed,
        Action onInvalidAccountNumber,
        Action onLostOrStolenCard,
        Action onNonReloadableInsufficientFunds,
        Action onPickUpCard,
        Action onRestrictedCard,
        Action onUserInitiated,
        Action<string> otherwise)
    {
        if (this == CardAccountClosed) onCardAccountClosed();
        else if (this == InvalidAccountNumber) onInvalidAccountNumber();
        else if (this == LostOrStolenCard) onLostOrStolenCard();
        else if (this == NonReloadableInsufficientFunds) onNonReloadableInsufficientFunds();
        else if (this == PickUpCard) onPickUpCard();
        else if (this == RestrictedCard) onRestrictedCard();
        else if (this == UserInitiated) onUserInitiated();
        else otherwise(Value);
    }
}
