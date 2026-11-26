using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Card Account response type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CardAccountType>))]
public sealed record CardAccountType : OpenStringEnum<CardAccountType>
{
    private CardAccountType(string value) : base(value)
    {
    }

    public static readonly CardAccountType Undefined = new("UNDEFINED");

    public static readonly CardAccountType CreditCard = new("CREDIT_CARD");

    public static readonly CardAccountType DebitCard = new("DEBIT_CARD");

    public static readonly CardAccountType PrepaidCard = new("PREPAID_CARD");

    public static readonly CardAccountType Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onUndefined,
        Func<TResult> onCreditCard,
        Func<TResult> onDebitCard,
        Func<TResult> onPrepaidCard,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Undefined => onUndefined(),
            _ when this == CreditCard => onCreditCard(),
            _ when this == DebitCard => onDebitCard(),
            _ when this == PrepaidCard => onPrepaidCard(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onUndefined,
        Action onCreditCard,
        Action onDebitCard,
        Action onPrepaidCard,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Undefined) onUndefined();
        else if (this == CreditCard) onCreditCard();
        else if (this == DebitCard) onDebitCard();
        else if (this == PrepaidCard) onPrepaidCard();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
