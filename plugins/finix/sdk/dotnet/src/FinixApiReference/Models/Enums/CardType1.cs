using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// A code that indicates whether the card is credit, debit, or prepaid.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CardType1>))]
public sealed record CardType1 : OpenStringEnum<CardType1>
{
    private CardType1(string value) : base(value)
    {
    }

    public static readonly CardType1 Credit = new("CREDIT");

    public static readonly CardType1 Debit = new("DEBIT");

    public static readonly CardType1 HsaFsa = new("HSA_FSA");

    public static readonly CardType1 ReloadablePrepaid = new("RELOADABLE_PREPAID");

    public static readonly CardType1 UnreloadablePrepaid = new("UNRELOADABLE_PREPAID");

    public static readonly CardType1 Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onCredit,
        Func<TResult> onDebit,
        Func<TResult> onHsaFsa,
        Func<TResult> onReloadablePrepaid,
        Func<TResult> onUnreloadablePrepaid,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Credit => onCredit(),
            _ when this == Debit => onDebit(),
            _ when this == HsaFsa => onHsaFsa(),
            _ when this == ReloadablePrepaid => onReloadablePrepaid(),
            _ when this == UnreloadablePrepaid => onUnreloadablePrepaid(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onCredit,
        Action onDebit,
        Action onHsaFsa,
        Action onReloadablePrepaid,
        Action onUnreloadablePrepaid,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Credit) onCredit();
        else if (this == Debit) onDebit();
        else if (this == HsaFsa) onHsaFsa();
        else if (this == ReloadablePrepaid) onReloadablePrepaid();
        else if (this == UnreloadablePrepaid) onUnreloadablePrepaid();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
