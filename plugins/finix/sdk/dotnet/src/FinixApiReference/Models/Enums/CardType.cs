using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of payment card saved in the <c>Payment Instrument</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CardType>))]
public sealed record CardType : OpenStringEnum<CardType>
{
    private CardType(string value) : base(value)
    {
    }

    public static readonly CardType Credit = new("CREDIT");

    public static readonly CardType Debit = new("DEBIT");

    public static readonly CardType HsaFsa = new("HSA_FSA");

    public static readonly CardType NonReloadablePrepaid = new("NON_RELOADABLE_PREPAID");

    public static readonly CardType ReloadablePrepaid = new("RELOADABLE_PREPAID");

    public static readonly CardType Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onCredit,
        Func<TResult> onDebit,
        Func<TResult> onHsaFsa,
        Func<TResult> onNonReloadablePrepaid,
        Func<TResult> onReloadablePrepaid,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Credit => onCredit(),
            _ when this == Debit => onDebit(),
            _ when this == HsaFsa => onHsaFsa(),
            _ when this == NonReloadablePrepaid => onNonReloadablePrepaid(),
            _ when this == ReloadablePrepaid => onReloadablePrepaid(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onCredit,
        Action onDebit,
        Action onHsaFsa,
        Action onNonReloadablePrepaid,
        Action onReloadablePrepaid,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Credit) onCredit();
        else if (this == Debit) onDebit();
        else if (this == HsaFsa) onHsaFsa();
        else if (this == NonReloadablePrepaid) onNonReloadablePrepaid();
        else if (this == ReloadablePrepaid) onReloadablePrepaid();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
